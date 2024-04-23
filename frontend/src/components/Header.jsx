import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <Navbar fluid rounded>
        <Navbar.Brand className='flex items-center'>
            <img className='w-16 h-16 rounded-full' src="https://img.freepik.com/premium-vector/picture-doctor-with-glasses-lab-coat_410516-87465.jpg" alt="logo" />
            <div className='flex flex-col justify-center items-center'>
            <p className='text-2xl font-semibold'>Health<span className='font-bold text-purple-700'>HUB</span></p>
            <span className='text-lg italic font-medium'>Connect</span>
            </div>
        </Navbar.Brand>
        
        <div className='flex md:order-2'>
            <Dropdown
            arrowIcon={false}
            inline
            label={
                <Avatar alt='User settings' 
                img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                rounded/>
            }>
                <Dropdown.Header className='flex flex-col'>
                    <span className='text-md font-semibold'>Mithun verma</span>
                    <span className='text-slate-500'>mithun@gmail.com</span>
                </Dropdown.Header> 
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Book an Appointment</Dropdown.Item>
                <Dropdown.Item>Track status</Dropdown.Item>
                <Dropdown.Item>Log out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse className=''>
            <Link className='mb-2 p-2 rounded-md hover:border font-semibold' to={'/'}>Home</Link>
            <Link className='mb-2 p-2 rounded-md hover:border font-semibold' to={'/chat'}>Chat with expert</Link>
            <Link className='mb-2 p-2 rounded-md hover:border font-semibold' to={'/about'}>About</Link>
            <Link className='mb-2 p-2 rounded-md hover:border font-semibold' to={'/contact'}>Contact</Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header