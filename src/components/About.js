

// /**
//  * 
//  * Parent Constructor
//  * Parent render
//  *      First child Constructor
//  *      First child render
//  * 
//  *      Dom updated the child 
//  * 
//  *      Second child Constructor
//  *      Second child render
//  *  
//  *      First child componentDidMount
//  *      Second child componentDidMount
//  * Parent componentDidMount
//  * 
//  */\


import React from 'react';
import {  FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div id='about' className='  py-8 items-center mx-40 justify-center'>
      <div className='container mx-auto py-4  '></div>
          <h2 className=' text-center text-gray-800 text-2xl font-bold   p-10'>About Me</h2>
          <p className='text-gray-600 mb-4 px-12 text-md text-justify '>Siddhant this side , I am a front end web developer.
          I love creating dynamic websites . I love to learn new technologies . Currently i have learned React which is a JavaScript framework . New technologies always fascinate me
          . I enjoy bringing my ideas to life through coding and building innovative 
           projects.<br></br><br></br>
           Originally from Delhi, I completed my schooling at New Era Public School.
           Currently I am persuing my B.Tech in Computer Science Engineering at Maharaja Agrasen Institute Of Technology.
           <br></br><br></br>Feel free to connect with me on social media-I'm always eagar to hear from fellow developers and enthusiasts!</p>

           <div className="flex items-center my-3 gap-10 mb-4 px-12">
                            <Link
                                to={'https://www.instagram.com/siddhannnntttt'}
                                className='cursor-pointer'>
                                <FaInstagram className='text-2xl  cursor-pointer text-pink-600 opacity-70 ' />
                            </Link>
                            <Link
                                to={'https://twitter.com/SiddhantVaidwal'}
                                className='cursor-pointer'>
                                <FaTwitter className='text-2xl  cursor-pointer text-sky-500 opacity-70 ' />
                            </Link>
                            <Link
                                to={'https://www.linkedin.com/in/siddhant-v-41b763222/'}
                                className='cursor-pointer'>
                                <FaLinkedin className='text-2xl  cursor-pointer text-blue-800 opacity-70 ' />
                            </Link>
                            
                            </div>
    </div>
  );
};

export default About;
