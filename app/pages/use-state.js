import {useState} from 'react'
import Layout from '../components/Layout'

export default function Page() {
  const [count, setCount] = useState(0)
  const onIncrement = function(e){
    setCount(count + 1)
  }
  return (
    <Layout>
      <div>
        <h1 className='wt-title'>
          Use state
        </h1>
        <div>
          {count}
        </div>
        <div>
          <button
            className="bg-slate-500 hover:bg-blue-500 text-white px-3 py-2 rounded"
            onClick={onIncrement}
          >
            Click me
          </button>
        </div>
      </div>
    </Layout>
  )
}
