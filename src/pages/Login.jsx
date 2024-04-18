import React from 'react';
import { Text } from '../utils/Text';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../utils/Button';
import { authService } from '../appwrite/authService';
import { loginUser } from '../redux/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!(email || password)) {
            alert('Please Fill Your Inputs');
        } else {
            const user = await authService.login({ email, password });
            const currUser = user.$id ? user : null;
            dispatch(loginUser(currUser));
            navigate('/');
        }
    };

    return (
        <div className='max-w-[500px] space-y-8 mx-auto p-5'>
            <Text as='h2' className='text-4xl font-semibold'>
                Login
            </Text>
            <Text>
                Don't have an account ?{' '}
                <NavLink className='underline font-medium' to='/register'>
                    Register Here
                </NavLink>
            </Text>
            <form className='space-y-5' onSubmit={submitHandler}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Enter your email address...'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Enter your password'
                    />
                </div>
                <Button className='bg-[var(--primary)] text-white rounded px-10 mx-auto'>
                    Login Now
                </Button>
            </form>
        </div>
    );
};

export default Login;
