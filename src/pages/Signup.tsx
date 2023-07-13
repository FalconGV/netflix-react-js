// import { Input } from 'postcss'
import React, { FormEvent, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) =>{
    e.preventDefault();
    try {
        await signUp(email, password);
        navigate('/')
    }catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ceb3b1eb-2673-4dd9-a6e3-0cd7a5e130ee/aba1315b-416d-4216-8f5d-7b80de3a4685/UA-en-20230522-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sing Up</h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
               <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rouded' type="email" placeholder='Email' autoComplete='email' />
                 <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rouded'
                   type="password"
                   placeholder='Password'
                   autoComplete='current-password'
                   />
              <button className='bg-red-600 py-3 my-6 rounded fond-bold'>Sing Up</button>
              <div className='flex justify-between items-center text-sm text-gray-500'>
                <p><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'><span className='text-gray-600'>Already subscribdd to Netflix?
                </span>{' '}
                <Link to='/login'>Sing In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
// https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737d/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"