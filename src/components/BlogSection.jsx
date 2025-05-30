import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { blogService } from '../appwrite';
import { formattedDate, Text, DeleteModel } from '../utils';

const BlogSection = ({ $id, heading, $createdAt, type, content }) => {
  const user = useSelector((state) => state?.auth?.userData);
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteBlog = async () => {
    try {
      const res = await blogService.deleteBlogPost($id);
      console.log(res);
      window.location.href = '/blog';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mb-5 border-b relative'>
      <div className='flex gap-5 justify-between items-center relative'>
        <Text as='h2' className='text-3xl font-bold'>
          {heading}
        </Text>
        {user?.labels && user?.labels?.includes('admin') && (
          <div className='flex gap-4 items-center absolute top-2 right-0'>
            <button
              onClick={() => setIsOpen(true)}
              className='text-primary font-bold bg-white p-2 rounded-full'>
              <FaRegTrashAlt size={20} />
            </button>
            <NavLink
              to={`/create/blog/${$id}`}
              className='text-secondary font-bold bg-white p-2 rounded-full'>
              <FaRegEdit size={20} />
            </NavLink>
          </div>
        )}
      </div>
      <Text className='font-medium py-2'>
        {formattedDate($createdAt)}
        <span>
          {' | '}
          {type}
        </span>
      </Text>
      <Text className='post-section'>{parse(content)}</Text>

      {/* Delete Modal */}
      <DeleteModel isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleDeleteBlog} />
    </div>
  );
};

BlogSection.propTypes = {
  $id: PropTypes.string,
  heading: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.string,
  $updatedAt: PropTypes.string,
  $createdAt: PropTypes.string,
  $permissions: PropTypes.array,
};

export default BlogSection;
