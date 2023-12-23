import Link from 'next/link'
import Image from 'next/image'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import { useContext } from 'react'
import UserContext from './UserContext'
import ThemeToggle from "./ThemeToggle.js"

export default function Header() {
  const { user, login, logout } = useContext(UserContext)
  
  return (
    <header>
      <div className="flex items-center justify-between h-16"> 
        <div className="flex gap-5 flex-1">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
        <div className="flex-1 text-center text-4xl font-bold"><Link href = "/">WebTechApp</Link></div>  
        <div className="flex text-center gap-10 flex-1 text-xl">
          <ThemeToggle />
          <Link href="/articles" className="flex text-center gap-10 flex-1 text-xl">Articles</Link>
          <Link href="/about" className="flex text-center gap-10 flex-1 text-xl">About</Link>
          <Link href="/contacts" className="flex text-center gap-10 flex-1 text-xl">Contact</Link> 
          <div className="flex text-center gap-10 flex-1 text-xl">
            {user && (
              <Link href="/profile" className="flex gap-2 items-center"> 
                {user.username}
                <OutlineUserCircleIcon className="h-6 w-6" /> 
              </Link>
            )}
          </div>
          <div className="flex text-center gap-10 flex-1 text-xl">
            {user ? (
              <button onClick={() => logout()} className="flex gap-2 items-center">
                Sign out
              </button>
            ) : (
              <button onClick={() => login()} className="flex gap-2 items-center">
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
