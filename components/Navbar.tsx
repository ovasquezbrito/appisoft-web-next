import { auth, signOut, signIn } from '@/auth'
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

        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create' className='text-sm font-medium'>
                <span>Create</span>
              </Link>
              <form action={async () => {
                "use server"; 
                await signOut({ redirectTo: '/' })
              }}>
                <button type='submit' className='text-sm font-medium'>Logout</button>
              </form>

              <Link href={`/user/${session.user?.id}`} className='text-sm font-medium'>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={ async() => {
              "use server";
              await signIn('github')
            }}>
              <button type='submit' className='text-sm font-medium'>
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar