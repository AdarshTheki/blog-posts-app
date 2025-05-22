import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import owner from '../assets/images/Ellipse.png';
import { Button, Text } from '../utils';

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Adarsh Resume.pdf'; // Path to your PDF
    link.download = 'AdarshResume.pdf'; // Name for the downloaded file
    link.click();
  };

  return (
    <div className='main-container'>
      <div className='sm:grid grid-cols-2 pt-10 pb-5 items-center justify-between w-full'>
        <div className='space-y-2'>
          <Text as='h2' className='font-semibold capitalize text-4xl'>
            Hi, I am Adarsh, <br />
            Creative Technologist
          </Text>
          <Text>
            We are seeking a highly skilled and detail-oriented MERN Stack Developer to join our
            innovative team. As a seasoned problem-solver, you'll craft robust web applications
            using MongoDB, Express, React, and Node.js. Collaborate with our experts to bring
            cutting-edge ideas to life.
          </Text>
        </div>
        <div className='w-full'>
          <img src={owner} alt='owner image' className='block mx-auto w-2/5 ' />
        </div>
      </div>
      <Button
        onClick={handleDownload}
        leftIcon={<IoMdDownload />}
        className='text-white bg-primary'>
        Download Resume
      </Button>
    </div>
  );
};

export default HeroSection;
