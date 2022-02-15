import React from 'react'
import { useSession } from 'next-auth/react'

function Center() {
    const { data: session } = useSession();

  return (
    <div className='flex flex-grow text-white'>
      <h1 className=''> I am the center </h1>
      <header>
          <div>
              <img className='rounded-full w-10 h-10' src={session?.user.image} alt=''/>
          </div>
          <h2>{session?.user.</h2>
      </header>
    </div>
  )
}

export default Center
