import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostSection from '../components/PostSection';
import { Text } from '../utils/Text';
import { Button } from '../utils/Button';

const Blog = () => {
    const { blogs } = useSelector((state) => state.fetchData);

    const navigate = useNavigate();
    const prevRoute = () => navigate(-1);

    return (
        <div className='main-container'>
            <div className='my-10 flex gap-4 items-center justify-start'>
                <Button onClick={prevRoute} className='bg-gray-300 rounded-full px-3'>
                    <FaChevronLeft />
                </Button>
                <Text as='h2' className='text-3xl font-semibold'>
                    Blog
                </Text>
                <NavLink
                    to='/create/blog'
                    className='bg-green-300 text-black flex items-center gap-2 font-semibold rounded-full py-2 px-4'>
                    <MdAdd />
                    Add Blog
                </NavLink>
            </div>
            <div>
                {blogs?.map((blog) => (
                    <div key={blog.$id} className='mb-8'>
                        <PostSection {...blog} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
