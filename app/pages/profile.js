import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from 'react';
import UserContext from '../components/UserContext'
import Layout from '../components/Layout.js'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { v4 as uuidv4 } from 'uuid'

const styles = {
  input: "bg-[lightslategray]",
  imageContainer: "grid lg:block flex-[1] h-[350px] absolute right-20 top-[x]",
  image:""

}


export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(ctx)
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }


  const { data } = await supabase
    .from('user')
    .select('email')
    .eq('email', session.user.email)
    .single()

  if (data.email != session.user.email)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  return {
    props: {
      user: session.user
    }
  }
}

export default function Page(props) {
  const router = useRouter()
  const { user, logout } = useContext(UserContext)
  const supabase = useSupabaseClient()

  const [media, setMedia] = useState(null)
  const [file, setFile] = useState(null)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('user')
        .select('*')
        .eq('email', props.user.email)
        .single()

      if (error) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      // const result = await response.json()

      setEmail(data.email)
      setMedia(data.image)
      setUsername(data.name)

      console.log(data)
    }

    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })
  }, [])

  async function uploadImage(e) {
    setFile(e.target.files[0])
    let uuidv4_ = uuidv4()


    const { data, error } = await supabase
      .storage
      .from('images')
      .upload(props.user.id + "/" + uuidv4_, file)

    if (data) {
      setMedia(`https://vdtyfskrdjugcgkeuvqy.supabase.co/storage/v1/object/public/images/${props.user.id}/${uuidv4_}`)

    } else {
      console.log(error)
    }
  }

  async function saveUserInfo(){
    //Only save image
    const {error} = await supabase
    .from('user')
    .update({image:`${media}`})
    .eq('email',props.user.email)
  }


  return (
    <Layout
      title="Profile"
      description="User profile page"
    >
      <h1 className='wt-title'>
        Profile
      </h1>
      {media && (
        <div className={styles.imageContainer}>
          <img src={media} alt="" width={350} height={350} className={styles.image} />
        </div>
      )}
      <form className="[&_span]:block grid gap-3" >
        <div>
          <label>
            <span>First name</span>
            <input className={styles.input} type="text" name="firstname" />
          </label>
        </div>
        <div>
          <label>
            <span>Last name</span>
            <input className={styles.input} type="text" name="lastname" />
          </label>
        </div>
        <div>
          <label>
            <span>Username</span>
            <input className={styles.input} value={username} type="text" name="lastname" />
          </label>
        </div>
        <div>
          <label>
            <span>Email</span>
            <input className={styles.input} value={email} type="text" name="email" />
          </label>
        </div>
        <div>
          <label>
            <span>Image</span>
            <input type="file" onChange={(e) => uploadImage(e)} />
          </label>
        </div>
        <div>
          <button
            className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
            onClick={() => saveUserInfo()}
          >
            Save
          </button>
        </div>
      </form>
      <pre><code>{/*JSON.stringify(user, null, 2)*/}</code></pre>
    </Layout>
  )
}
