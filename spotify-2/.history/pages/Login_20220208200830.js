import React from 'react'
import { getProviders, signIn } 


function Login() {
  return (
    <div>
      <h1> This is a login page</h1>
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders();
}