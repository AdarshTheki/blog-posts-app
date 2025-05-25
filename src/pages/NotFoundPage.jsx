import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-800'>404</h1>
          <p className='text-2xl font-light text-gray-600'>Page not found</p>
          <p className='mt-4 mb-6 text-gray-600'>
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
          <NavLink
            to='/'
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition ease-in-out duration-300'>
            Go Home
          </NavLink>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default NotFoundPage;
