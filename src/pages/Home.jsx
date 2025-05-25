/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { Button, Text } from '../utils';
import { IoMdDownload } from 'react-icons/io';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Adarsh Resume.pdf'; // Path to your PDF
    link.download = 'AdarshResume.pdf'; // Name for the downloaded file
    link.click();
  };

  return (
    <div className='space-y-4'>
      <div className='main-container'>
        <div className='sm:grid grid-cols-2 pt-10 pb-5 items-center justify-between w-full'>
          <div className='space-y-2'>
            <Text as='h2' className='font-semibold capitalize text-4xl'>
              Hi, I am Adarsh, <br />
              Creative Technologist
            </Text>
            <Text>
              We are seeking a highly skilled and detail-oriented{' '}
              <strong>MERN Stack Developer</strong> to join our innovative team. As a seasoned
              problem-solver, you'll craft robust web applications using{' '}
              <strong>MongoDB, Express, React, </strong>
              and <strong>Node.js</strong>. Collaborate with our experts to bring cutting-edge ideas
              to life.
            </Text>
          </div>
          <div className='w-full'>
            <img src={'/owner.png'} alt='owner image' className='block mx-auto w-2/5 ' />
          </div>
        </div>
        <Button
          onClick={handleDownload}
          leftIcon={<IoMdDownload />}
          className='text-white bg-primary'>
          Download Resume
        </Button>
      </div>

      <div className='main-container'>
        <div className='border-y py-4 my-5'>
          <Text as='h2' className='text-2xl mb-5 font-bold'>
            Recent Blog Posts
          </Text>
          <div className='flex max-sm:flex-col gap-5'>
            {recentBlog.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <NavLink
            className='bg-primary px-4 py-2 font-semibold text-white hover:opacity-85 block w-fit mt-5 rounded-lg'
            to='/blog'>
            See More
          </NavLink>
        </div>
      </div>
      <div className='main-container space-y-8'>
        <Text as='h2' className='text-2xl font-bold'>
          Feature Project
        </Text>
        {featureWork.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

const WorkCard = ({ id, createdAt, img, title, content }) => {
  return (
    <div className='flex max-sm:flex-col gap-5 mb-8 pb-4 border-b items-center'>
      <div className='sm:w-1/2'>
        <img src={img} alt={id} className='w-full' />
      </div>
      <div className='w-full'>
        <Text className='text-xl font-semibold'>{title}</Text>
        <Text className='font-medium py-2'>{createdAt}</Text>
        <Text>{content}</Text>
      </div>
    </div>
  );
};

const BlogCard = ({ title, createdAt, content }) => {
  return (
    <div className='w-full'>
      <Text className='text-xl font-semibold'>{title}</Text>
      <Text className='font-medium py-2'>{createdAt}</Text>
      <Text>{content}</Text>
    </div>
  );
};

const recentBlog = [
  {
    id: 1,
    createdAt: ' 2025 | AI (Artificial Intelligence)',
    title: 'Will AI take away my job?',
    content:
      'AI has no consciousness; it can only do what it is programmed to do. These are just programmed reactions. If you are in a job that involves this kind of programmable role, your job would be threatened by AI. Human beings, by definition, must be in actions that involve creativity.',
  },
  {
    id: 2,
    createdAt: ' 2025 | AI (Artificial Intelligence)',
    title: 'Software jobs is dead on AI entered ?',
    content:
      'My Advice, focus on fundamentals: No matter what technology you learn, strong fundamentals in algorithms, data structures, and system design will always be valuable.- Be Adaptable: The tech industry changes fast. Be ready to learn new tools and technologies as they emerge.',
  },
];

const featureWork = [
  {
    id: 1,
    createdAt: '2025 | Dashboard',
    title: 'Designing an Effective Dashboard',
    img: '/work-2.png',
    content:
      'Creating a successful dashboard starts with defining its purpose. Identify the key metrics that matter most to your users, whether it’s sales data, user engagement, or project milestones. Focus on user-centric design: ensure the layout is intuitive and visually appealing. Choose the right visuals—like line graphs for trends and bar charts for comparisons—to convey information clearly. Don’t forget responsiveness; your dashboard should work seamlessly on mobile devices. Regularly update the data and gather user feedback to refine the design continuously. This iterative process ensures your dashboard remains relevant and effective.',
  },
  {
    id: 2,
    createdAt: '2025  | Illustration',
    img: '/work-1.png',
    title: 'Vibrant Portraits of 2025',
    content:
      'As we step into 2025, vibrant portraits reflect a world bursting with color and innovation. These artworks capture diverse cultures, blending traditional styles with futuristic elements. From urban landscapes filled with technology to serene nature scenes, each portrait tells a story of human connection and resilience. Artists are embracing bold palettes and dynamic compositions, inviting viewers to envision a harmonious future. These portraits remind us of the beauty in diversity and the power of creativity in shaping our world.',
  },
];
