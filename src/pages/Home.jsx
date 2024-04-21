import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostImgSection, PostSection, HeroSection } from '../components';

import { Text } from '../utils';

const Home = () => {
    const { blogs, works } = useSelector((state) => state.fetchData);

    return (
        <div className='space-y-4'>
            <HeroSection />

            <div className='py-4 border-y'>
                <div className='main-container'>
                    <div className='flex justify-between items-center mb-2'>
                        <Text as='strong' className='border-dark border-b-2'>
                            Recent Posts
                        </Text>
                        <NavLink to='/blog' className='text-primary font-semibold underline'>
                            View All
                        </NavLink>
                    </div>
                    <div className='sm:grid grid-cols-2 gap-4'>
                        {blogs.slice(0, 2).map((post) => (
                            <PostSection key={post.$id} {...post} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='main-container space-y-4'>
                <div className='flex items-center justify-between'>
                    <Text as='strong' className='border-dark border-b-2'>
                        Project Works
                    </Text>
                    <NavLink to='/work' className='text-primary font-semibold underline'>
                        View All
                    </NavLink>
                </div>
                <div>
                    {works?.slice(0, 3)?.map((post) => (
                        <PostImgSection key={post.$id} {...post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
