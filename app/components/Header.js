import Link from 'next/link'
import Image from 'next/image'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import { useContext } from 'react'
import UserContext from './UserContext'
import ThemeToggle from "./Theme/ThemeToggle.js"

const styles = {
  links: "flex items-center gap-5 flex-2 text-1xl"
}

export default function Header() {
  const { user, login, logout } = useContext(UserContext)
  const links = ""
  return (
    <header>
      <div className="flex items-center justify-between h-[100px]"> 
        <div className="flex gap-2.5 flex-1">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
        <div className="flex-1 text-center text-4xl font-[bold]"><Link href = "/">WebTechApp</Link></div>  
        <div className={styles.links}>
          <ThemeToggle />
          <Link href="/articles">Articles</Link>
          <Link href="/about" >About</Link>
          <Link href="/contacts">Contacts</Link> 
            {user && (
              <div className={styles.links}>
              <Link href="/profile"> 
                {user.user_metadata.user_name}
                <OutlineUserCircleIcon className="h-6 w-6" /> 
              </Link>
              <Link href="/writeArticle">
                Write
              </Link>
              </div>
            )}
            {user ? (
              <button onClick={() => logout()} >
                Sign out
              </button>
            ) : (
              <button onClick={() => login()} >
                Sign in
              </button>
            )}
        </div>
      </div>
    </header>
  );
}
