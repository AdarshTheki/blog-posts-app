import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import { FaChevronLeft } from 'react-icons/fa';
import PostImgSection from '../components/PostImgSection';
import { Text } from '../utils/Text';

const FeatureWorks = () => {
    const navigate = useNavigate();
    const { works } = useSelector((state) => state.fetchData);

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
                    Work
                </Text>
                <NavLink
                    to='/create/work'
                    className='bg-secondary hover:bg-secondary/85 text-white flex items-center gap-2 font-medium rounded-full py-2 px-4'>
                    <MdAdd />
                    Add Work
                </NavLink>
            </div>
            <div>
                {works?.map((post) => (
                    <PostImgSection key={post.$id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default FeatureWorks;
