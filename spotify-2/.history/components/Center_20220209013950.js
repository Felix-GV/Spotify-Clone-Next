import React from 'react'
import { useSession } from 'next-auth/react'

function Center() {
    const { data: session } = useSession();

  return (
    <div className='flex flex-grow text-white'>
      <h1 className=''> I am the center </h1>
      <header>
          <div>
              <img src={session.use} alt=''/>
          </div>
      </header>
    </div>
  )
}

export default Center
