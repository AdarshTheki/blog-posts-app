import React from 'react';
import { Text } from '../utils/Text';
import HeroSection from '../components/HeroSection';
import PostSection from '../components/PostSection';
import PostImgSection from '../components/PostImgSection';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const { blogs, works } = useSelector((state) => state.fetchData);

    return (
        <div className='space-y-4'>
            <HeroSection />

            <div className='py-4 border-y'>
                <div className='main-container'>
                    <div className='flex justify-between items-center mb-2'>
                        <Text as='strong' className='border-[var(--dark)] border-b-2'>
                            Recent Posts
                        </Text>
                        <NavLink
                            to='/blog'
                            className='text-[var(--primary)] font-semibold underline'>
                            View All
                        </NavLink>
                    </div>
                    <div className='sm:grid grid-cols-2 gap-4'>
                        {blogs.slice(0, 2).map((post) => (
                            <div key={post.$id} className='p-5 bg-[var(--white)] rounded-lg'>
                                <PostSection {...post} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='main-container space-y-4'>
                <div className='flex items-center justify-between'>
                    <Text as='strong' className='border-[var(--dark)] border-b-2'>
                        Project Works
                    </Text>
                    <NavLink to='/work' className='text-[var(--primary)] font-semibold underline'>
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
