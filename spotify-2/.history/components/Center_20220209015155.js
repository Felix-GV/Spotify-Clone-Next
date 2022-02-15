import React from 'react';
import { useSession } from 'next-auth/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

function Center() {
    const { data: session } = useSession();

  return (
    <div className='flex flex-grow text-white'>
      <h1 className=''> I am the center </h1>
      <header>
          <div className='flex items-center bg-black'>
              <img className='rounded-full w-10 h-10' src={session?.user.image} alt=''/>
          </div>
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
      </header>
    </div>
  )
}

export default Center
