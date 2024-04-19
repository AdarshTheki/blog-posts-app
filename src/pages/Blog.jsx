import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostSection from '../components/PostSection';
import { Text } from '../utils/Text';

const Blog = () => {
    const { blogs } = useSelector((state) => state.fetchData);

    const navigate = useNavigate();
    const prevRoute = () => navigate(-1);

    return (
        <div className='main-container'>
            <div className='py-10 flex gap-4 items-center justify-start'>
                <button
                    onClick={prevRoute}
                    className='bg-gray-200 hover:bg-slate-300 rounded-full p-3.5'>
                    <FaChevronLeft />
                </button>
                <Text as='h2' className='text-3xl font-semibold'>
                    Blog
                </Text>
                <NavLink
                    to='/create/blog'
                    className='bg-secondary hover:bg-secondary/85 text-white flex items-center gap-2 font-medium rounded-full py-2 px-4'>
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
