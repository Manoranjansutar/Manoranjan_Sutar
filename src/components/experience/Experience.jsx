import Lottie from 'lottie-react'
import React from 'react'
import experience from './../../assets/gif json/experience.json';
import logo from './../../assets/sanemi.gif';

const Experience = () => {
  return (
    <div className='pt-10 bg-[#0f172a]'>
      <div className='flex justify-center align-middle'> <h1 className='inline-block text-4xl tracking-widest text-center text-white ultra-regular lg-text-6xl md:text-5xl' style={{borderBottom:"8px solid rgb(9,244,244,1)"}}>Experience</h1></div>
      <div className='flex flex-col items-center justify-center text-white md:flex-row lg:flex-row space-mono-regular'  >
         <Lottie animationData={experience} className="w-80"/>
         <div className='flex items-center justify-center gap-3 p-2 rounded-md font-bolder space-mono-regular hover:bg-[#151f34]' style={{border:"1px solid rgb(9,244,244,1)"}}>
            <img src={logo} alt="" className='w-32 '/>
            <div>
                <h1 className='logo'>SANEMI TECHNOLOGIES PVT LTD,Bengaluru</h1>
                <p>Experience- 3Yrs =&gt; 06/2021 – Present</p>
                <p>Role- FullStack Developer</p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Experience
