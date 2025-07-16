import React,{ useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import profilePicture from '../../assets/profilePicture.jpg'


const About = () => {

const words = ['Web Developer', 'FullStack Developer', 'Coder', 'UI/UX Designer'];
  const colors = ['#8245ec', '#f59e0b', '#10b981', '#ef4444']; 

const [index, setIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Har 2 second mein change

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='about'
    className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
<div className='flex flex-col-reverse md:flex-row justify-between items-center'>
  {/* Left Side */}
  <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
  {/* Greeting */}
  <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
    Hi, I am 
  </h1>
    {/* Name */}
  <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
  <Tilt>Shadab Khan</Tilt>
    
  </h2>
    {/* Skills Heading with typing effect */}
  <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
  <span className='text-white'>
    I am a <span style={{ color: colors[index], fontWeight: 'bold' }}>
              {words[index]}</span>
     </span>
     
    {/*
      Pata nahi kyu ye jo comment kr rakha haine wo code nahi chal yaha rha hain.
      <ReactTypingEffect 
    text={[
      'Fullstack Developer',
      'App Developer',
      'UI/UX Designer',
      'Coder'
    ]}
    speed={100}
    eraseSpeed={50}
    typingDelay={500}
    eraseDelay={2000}
    cursorRenderer={(cursor)=> (
      <span className='text-[#8245ec]'>{cursor}</span>
    )}
    /> */}
  </h3>
  <p className='text-base sm:text-lg md:text-lg text-gray-400 mb:10 mt-8 leading-relaxed'>Passionate and dedicated graduate with strong skills in web development, UI/UX design, HTML, CSS, JavaScript, and React JS. Actively building projects to gain practical experience and committed to delivering responsive, user-friendly applications.</p>
  

  {/*Resume Button*/}
  <a href='https://drive.google.com/file/d/1baaQgv7JoUNy5jlXtwApV83KarzMG1Ym/view?usp=drive_link'
  target='_blank'
  rel='noopener noreferrer'
  className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
  style={{
    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
  }}
  >Download Curriculum vitae (CV)</a>
  </div>
  <div className='md:i/2 flex justify-center md:justify-end'>
  <Tilt 
  className=' border-4 border-red-800 rounded-full'>
  <img 
  src={profilePicture}
  alt='profilePicture'
  className='w-100 h-100 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
  </Tilt>
  </div>
</div>
    </section>
  )
}

export default About