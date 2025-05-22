import { useParams } from 'react-router-dom';
import { BlogForm } from '../components';
import { blogService } from '../appwrite';
import { useEffect, useState } from 'react';

const UpdateBlog = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await blogService.getBlogPostById(slug);
        setData(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading)
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-20 w-20 border-b-2 border-[var(--dark)]'></div>
      </div>
    );

  return (
    <div>
      <BlogForm blogData={data} />
    </div>
  );
};

export default UpdateBlog;
