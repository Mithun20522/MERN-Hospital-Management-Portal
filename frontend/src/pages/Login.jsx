import {Button, Card, Label, TextInput} from 'flowbite-react'
import {Link} from 'react-router-dom';
import {HiMail} from 'react-icons/hi'
import { RiLockPasswordFill } from "react-icons/ri";
const Login = () => {
  return (
    <section className='bg-gray-200 py-36 h-screen'>
      <Card className='max-w-md mx-auto shadow-md rounded-xl'>
      <h1 className='text-center text-2xl font-bold'>Login to your Account</h1>
      <form className='flex flex-col gap-4'>
        <div>
          <div className='mb-2'>
            <Label htmlFor='email' value='Enter Your Email'/>
          </div>
          <div>
            <TextInput id='email' type='email' icon={HiMail} placeholder='example@gmail.com' required/>
          </div>
        </div>
        <div>
          <div>
            <Label htmlFor='password' value='Enter Your Password'/>
          </div>
          <div>
            <TextInput id='password' type='password' icon={RiLockPasswordFill} placeholder='***********' required/>
          </div>
        </div>
        <Button type='submit'>Log in</Button>
        <div className='text-sm space-x-1 mt-1'>
          <span>Dont have an account?</span>
          <Link to={'/register'} className='text-blue-600 font-semibold hover:underline'>Register</Link>
        </div>
      </form>
    </Card>
    </section>
  )
}

export default Login