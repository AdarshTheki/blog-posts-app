import { FaChevronLeft } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { BlogSection } from '../components';
import { Text } from '../utils';
import { useEffect, useState } from 'react';
import { blogService } from '../appwrite';

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const prevRoute = () => navigate(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await blogService.getAllBlogPosts();
        if (res.total > 0) {
          setData(res.documents);
        }
        console.log(res.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data?.length)
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-20 w-20 border-b-2 border-[var(--dark)]'></div>
      </div>
    );

  return (
    <div className='main-container'>
      <div className='py-10 flex gap-4 items-center justify-start'>
        <button onClick={prevRoute} className='bg-gray-200 hover:bg-slate-300 rounded-full p-3.5'>
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
      {data &&
        data?.length &&
        data?.map((blog) => (
          <div key={blog.$id} className='mb-8'>
            <BlogSection {...blog} />
          </div>
        ))}
    </div>
  );
};

export default Blog;
