import type { NextPage } from 'next'
import Button from '../components/atoms/button/button'
import {useRouter} from "next/router"

const Home: NextPage = () => {
  const router = useRouter()

  const handleRoute = (url:string) => {
    router.push(url)
  }

  return (
    <div className='flex w-full justify-center h-screen items-center bg-tosca'>
      <header className='h-18 w-full bg-white fixed top-0 p-4 px-16 flex items-center justify-between'>
        <div>
          <p className='text-tosca-darker font-bold text-2xl'>Desa Manud Jaya</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <Button onClick={()=> handleRoute('/sign-in')} variant='primary' label='Sign In' />
          <Button onClick={()=> handleRoute('/sign-up')} variant='secondary' label='Sign Up' />
        </div>
      </header>
      <h1 className="text-3xl text-slate-800 font-bold underline decoration-pink-500 underline-offset-2">Welcome to Desa Digital Manud Jaya</h1>
    </div>
  )
}

export default Home
