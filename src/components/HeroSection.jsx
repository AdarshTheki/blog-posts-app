import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import owner from '../assets/images/Ellipse.png';
import { Button, Text } from '../utils';

const HeroSection = () => {
    return (
        <div className='main-container'>
            <div className='sm:grid grid-cols-2 pt-10 pb-5 items-center justify-between w-full'>
                <div className='space-y-2'>
                    <Text as='h2' className='font-semibold capitalize text-4xl'>
                        Hi, I am Adarsh, <br />
                        Creative Technologist
                    </Text>
                    <Text>
                        <strong>Front End Developer</strong> with One year of experience working
                        with <strong>Javascript</strong> & <strong>React.js</strong> to deliver
                        exceptional customer experiences, Adept at contributing to a highly
                        collaborative work environment, finding solutions, and determining customer
                        satisfactions.
                    </Text>
                </div>
                <div className='w-full'>
                    <img src={owner} alt='owner image' className='block mx-auto w-2/5 ' />
                </div>
            </div>
            <Button leftIcon={<IoMdDownload />} className='text-white bg-primary'>
                Download Resume
            </Button>
        </div>
    );
};

export default HeroSection;
