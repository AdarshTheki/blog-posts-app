import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import { workService } from '../appwrite';
import { Text, Button } from '../utils';

const PostForm = () => {
    const editorRef = useRef(null);
    const navigate = useNavigate();

    const [postData, setPostData] = useState({
        heading: '',
        slug: '',
        type: '',
        content: '<p>This is the initial content of the editor.</p>',
        image_url: '',
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
            const data = e.target.file.files[0];
            if (data) {
                const file = await workService.uploadFile(data);
                if (file) {
                    await workService
                        .createWorkPost({ slug, heading, type, content, image_url: file.$id })
                        .then(() => navigate('/'))
                        .catch((err) => alert(err?.message));
                }
            } else {
                alert('please Upload Image!');
            }
        }
    };

    return (
        <div className='main-container'>
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
                    <label htmlFor='file'>File:</label>
                    <input
                        type='file'
                        name='file'
                        id='file'
                        accept='image/png, image/jpg, image/jpeg, image/gif'
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
        </div>
    );
};

export default PostForm;
