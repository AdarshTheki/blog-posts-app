import { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { blogService } from '../appwrite';
import { Button, Text } from '../utils';
import PropTypes from 'prop-types';
import { config } from '../constant';

const BlogForm = ({ blogData }) => {
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    heading: blogData?.heading || '',
    slug: blogData?.slug || '',
    type: blogData?.type || '',
    content: blogData?.content || '<p>This is the initial content of the editor.</p>',
  });

  const changeHandler = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  // create slug transform
  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value
        .trim()
        .slice(0, 30)
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-');
    return '';
  }, []);

  useEffect(() => {
    setPostData((prevData) => ({ ...prevData, slug: slugTransform(prevData.heading) }));
  }, [slugTransform, postData.heading]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { type, heading, slug } = postData;
    const content = editorRef.current.getContent();
    if (!type || !heading) {
      return alert('Please Enter Yours Inputs');
    }

    let res;
    try {
      if (blogData?.$id) {
        res = await blogService.updateBlogPost(blogData.$id, { heading, type, content });
      } else {
        res = await blogService.createBlogPost({ slug, heading, type, content });
      }
      if (res?.$id) navigate('/blog');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-5 py-5 main-container'>
      <Text>
        <strong>Auto create slug:</strong> <span>{postData.slug}</span>
      </Text>
      <div>
        <label htmlFor='heading'>Heading:</label>
        <input
          type='text'
          name='heading'
          id='heading'
          placeholder='Please Enter Your Heading 0-50'
          value={postData.heading}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor='type'>Type:</label>
        <input
          type='text'
          name='type'
          id='type'
          value={postData.type}
          placeholder='Type Your Content'
          onChange={changeHandler}
        />
      </div>
      <div className='w-full'>
        <Editor
          apiKey={config.TinyApiKey}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue={postData.content}
          init={{
            plugins:
              'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
          }}
        />
      </div>
      <div className='flex gap-5'>
        <Button className=' bg-green-600 text-white rounded'>Submit Post</Button>
        <Button onClick={() => navigate('/blog')} className='bg-red-600 text-white rounded'>
          Cancel
        </Button>
      </div>
    </form>
  );
};

BlogForm.propTypes = {
  blogData: PropTypes.shape({
    heading: PropTypes.string,
    $id: PropTypes.string,
    slug: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default BlogForm;
