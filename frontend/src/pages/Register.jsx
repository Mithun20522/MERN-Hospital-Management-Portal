import {Button, Card, Checkbox, Label, TextInput} from 'flowbite-react'
import {Link} from 'react-router-dom';
import {HiMail} from 'react-icons/hi'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline, MdLocationPin } from "react-icons/md";
const Register = () => {
  return (
    <section className='bg-gray-200 py-10 h-screen'>
    <Card className='max-w-md mx-auto shadow-md rounded-xl'>
    <h1 className='text-center text-2xl font-bold'>Register Account</h1>
    <form className='flex flex-col gap-4'>
    <div className='flex gap-4 items-center'>
        <div>
          <div className='mb-2'>
            <Label htmlFor='firstName' value='First name'/>
          </div>
          <div>
            <TextInput id='firstName' type='text' icon={MdOutlineDriveFileRenameOutline} placeholder='John' required/>
          </div>
        </div>
        <div>
          <div className='mb-2'>
            <Label htmlFor='lastName' value='Last name'/>
          </div>
          <div>
            <TextInput id='firstName' type='text' icon={MdOutlineDriveFileRenameOutline} placeholder='Doe' required/>
          </div>
        </div>
        </div>
      <div className='flex flex-col'>
        <div className='flex items-center gap-5 mb-3'>
        <div>
          <div className='mb-2'>
            <Label htmlFor='age' value='Age'/>
          </div>
          <div>
            <TextInput id='age' type='number' className='max-w-lg' placeholder='Eg. 24' required/>
          </div>
        </div>
        <div>
          <div className='mb-2'>
            <Label htmlFor='gender' value='Select Gender'/>
          </div>
          <div className='flex gap-2'>
            <div className='space-x-1'>
            <Checkbox id='male'/>
            <Label htmlFor='male' value='Male'/>
            </div>
            <div className='space-x-1'>
            <Checkbox id='female'/>
            <Label htmlFor='female' value='Female'/>
            </div>
          </div>
        </div>
        </div>
        <div className='mb-2'>
          <Label htmlFor='state' value='Enter Your State'/>
        </div>
        <div>
          <TextInput id='state' className='max-w-sm' type='text' icon={MdLocationPin} placeholder='Eg. Mumbai' required/>
        </div>
      </div>
        <div>
          <div className='mb-2'>
          <Label htmlFor='email' value='Enter Email'/>
        </div>
        <div>
          <TextInput id='email' type='email' icon={HiMail} placeholder='example@gmail.com' required/>
        </div>
        </div>
      <div>
        <div>
          <Label htmlFor='password' value='Create Password'/>
        </div>
        <div>
          <TextInput id='password' type='password' icon={RiLockPasswordFill} placeholder='***********' required/>
        </div>
      </div>
      <Button type='submit'>Register</Button>
      <div className='text-sm space-x-1 mt-1'>
        <span>Already have an account?</span>
        <Link to={'/login'} className='text-blue-600 font-semibold hover:underline'>Login</Link>
      </div>
    </form>
  </Card>
  </section>
  )
}

export default Register