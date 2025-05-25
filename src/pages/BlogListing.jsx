import { FaChevronLeft } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { BlogSection } from '../components';
import { Text } from '../utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { blogService } from '../appwrite';

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [page, setPage] = useState(1); // Pagination tracker
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const prevRoute = () => navigate(-1);
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await blogService.getAllBlogPosts(page);
        if (res?.documents?.length !== 3) setHasMore(false);
        else setData((prev) => [...prev, ...res.documents]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

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
      <ul>
        {data && data?.length
          ? data?.map((blog, index) => (
              <li
                key={blog.$id}
                className='mb-8'
                ref={index === data?.length - 1 ? lastItemRef : null}>
                <BlogSection {...blog} />
              </li>
            ))
          : null}
      </ul>
      {loading && (
        <div className='flex justify-center items-center h-[100px]'>
          <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-[var(--dark)]'></div>
        </div>
      )}
      {!hasMore && <p className='text-center my-4'>No more items</p>}
    </div>
  );
};

export default Blog;
