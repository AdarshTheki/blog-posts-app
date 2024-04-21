import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Button, Text } from '../utils';

const Contact = () => {
    return (
        <div className='main-container'>
            <div className='flex sm:flex-row flex-col py-10 gap-8'>
                <div className='space-y-5 flex-1'>
                    <Text as='h2' className='text-4xl font-bold'>
                        Lets's Talk
                    </Text>
                    <Text>
                        Have some big idea or brand to develop and need help? Then reach out we'd
                        love to hear about your project and provide help
                    </Text>
                    <Text as='h3' className='text-2xl font-bold'>
                        Email
                    </Text>
                    <Text>adarshverma549@gmail.com</Text>
                    <Text as='h3' className='text-2xl font-bold'>
                        Social
                    </Text>
                    <ul className='capitalize underline'>
                        <li>Instagram</li>
                        <li>twitter</li>
                        <li>facebook</li>
                    </ul>
                </div>
                <form className='flex-1 flex flex-col gap-4'>
                    <div>
                        <label htmlFor='username'>Name</label>
                        <input type='text' id='username' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' />
                    </div>
                    <div>
                        <label htmlFor='interested'>Interested</label>
                        <input type='text' id='interested' />
                    </div>
                    <div>
                        <label htmlFor='budget'>budget</label>
                        <input type='text' id='budget' />
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' rows='5'></textarea>
                    </div>
                    <div>
                        <Button
                            leftIcon={<FaCloudUploadAlt />}
                            className='bg-primary rounded text-white font-semibold'>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
