import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import homeIMG from '../assets/Home.jpg';

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover' src={homeIMG} alt='background' />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/40'>
        <motion.div 
          className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center text-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }} 
        >
          <motion.h1 
            className='sm:text-5xl text-4xl lg:text-6xl font-bold shadow-gray-800'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I'm <span className='font-bold'>Akash</span>
          </motion.h1>
          <motion.h4 
            className='flex sm:text-3xl text-2xl lg:text-4xl pt-4'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'm a
            <TypeAnimation
              sequence={[
                'Developer!',
                2000,
                'Designer!',
                2000,
                'Coder!',
                2000,
                'Tech Enthusiast!',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </motion.h4>
          <motion.div 
            className='flex justify-between pt-6 max-w-[150px] w-full'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a 
              href='https://x.com/i/flow/login?redirect_after_login=%2Fakfreeks5_akash'
              className='cursor-pointer'
              whileHover={{ scale: 1.1 }}
            >
              <FaTwitter size={20} />
            </motion.a>
            <motion.a 
              href='https://www.facebook.com/aksah.aksah.108889?mibextid=ZbWKwL'
              className='cursor-pointer'
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebook size={20} />
            </motion.a>
            <motion.a 
              href='https://www.instagram.com/lofer_idol._/?igsh=MWMxNWw3MTE3OG1mbA%3D%3D'
              className='cursor-pointer'
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a 
              href='https://www.linkedin.com/in/akash19082001/'
              className='cursor-pointer'
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedinIn size={20} />
            </motion.a>
            <motion.a 
              href='https://github.com/Akash19082001'
              className='cursor-pointer'
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
