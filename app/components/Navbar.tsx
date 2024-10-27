import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = async() => {
  const session = await auth()
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex items-center justify-between'>
        <Link href='/' className='font-bold text-2xl'>
          <Image src='/logo.png' alt='logo' width={144} height={40} />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar