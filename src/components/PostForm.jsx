import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { blogService } from '../appwrite';
import { Button, Text } from '../utils';

const PostForm = () => {
    const editorRef = useRef(null);
    const navigate = useNavigate();

    const [postData, setPostData] = useState({
        heading: '',
        slug: '',
        type: '',
        content: '<p>This is the initial content of the editor.</p>',
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
            alert('Please Enter Yours Inputs');
        } else {
            await blogService
                .createBlogPost({ slug, heading, type, content })
                .then(() => navigate('/'))
                .catch((err) => alert(err?.message));
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
                        content_style:
                            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                />
            </div>
            <Button className=' bg-green-600 text-white rounded'>Submit Post</Button>
        </form>
    );
};

export default PostForm;
