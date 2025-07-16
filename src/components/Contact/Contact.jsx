import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  return (
 <section 
 id='contact'
 className='flex flex-col item-center justify-center py-24 px-[12vw] lg:px-[20vw]'
 >
  {/* Section Title */}
  <div className='text-center mb-16'>
    <h1 className='text-4xl font-bold text-white'>CONTACT</h1>
    <div className='w-32 h-1 bg-purple-500 mx-auto mt-4 '></div>
    <p className='text-gray-400 mt-4 text-lg font-semibold'>I love to hear from you-reach out for any opportunities or questions! </p>
  </div>

{/* Contact Form */}
<div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 mx-auto w-80% '>
  <h3 className='text-xl font-semibold text-white text-center'>Connect With Me 🚀</h3>
<form className='mt-4 flex flex-col space-y-4'>
  <input type='email' name='user_email' placeholder='Your Email' required
  className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' 
  />
   <input type='text' name='user_name' placeholder='Your Name' required
  className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' 
  />
   <input type='text' name='subject' placeholder='Subject' required
  className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' 
  />
  <textarea name='message' placeholder='Message' rows='4'
  className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
  ></textarea>
{/* Send button */}
<button type='submit'
className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'
>SEND</button>

</form>
</div>

 </section>
  )
}

export default Contact