import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import 

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}