import { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { blogService } from '../appwrite';
import { Button, Text } from '../utils';
import PropTypes from 'prop-types';

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
    <form onSubmit={submitHandler} className='space-y-5 py-10'>
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
      <div>
        <Editor
          apiKey='4vwhnn90fvqtkijfopg3yzjydcywqxgw2kzks79fgkqie9q5'
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue={postData.content}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visualblocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'code',
              'help',
              'wordcount',
            ],
            toolbar:
              'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          }}
        />
      </div>
      <Button className=' bg-green-600 text-white rounded'>Submit Post</Button>
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
