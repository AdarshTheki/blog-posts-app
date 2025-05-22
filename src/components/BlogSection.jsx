import parse from 'html-react-parser';
import { formattedDate, Text } from '../utils';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const BlogSection = ({ $id, heading, $createdAt, type, content, $permissions }) => {
  const permissions = Object.values($permissions);
  return (
    <div className='mb-5 border-b relative'>
      <Text as='h2' className='text-xl font-bold'>
        # {heading}
      </Text>
      {permissions && permissions.length > 2 && (
        <>
          <NavLink to={`/`} className='text-primary font-bold absolute top-2 right-12'>
            <FaRegTrashAlt size={24} />
          </NavLink>
          <NavLink
            to={`/create/blog/${$id}`}
            className='text-secondary font-bold absolute top-2 right-2'>
            <FaRegEdit size={24} />
          </NavLink>
        </>
      )}
      <Text className='font-medium py-2'>
        {formattedDate($createdAt)}
        <span>
          {' | '}
          {type}
        </span>
      </Text>
      <Text className='post-section'>{parse(content)}</Text>
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
