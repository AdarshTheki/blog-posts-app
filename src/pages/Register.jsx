import React, { useState } from 'react';
import { Text } from '../utils/Text';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../utils/Button';
import { authService } from '../appwrite/authService';
import { loginUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        const { name, password, email } = user;
        if (!(email || password || name)) {
            alert('Please Fill Your Inputs');
        } else {
            const user = await authService.register({ email, password, name });
            dispatch(loginUser(user));
            navigate('/')
        }
    };

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className='max-w-[500px] space-y-8 mx-auto p-5'>
            <Text as='h2' className='text-4xl font-semibold'>
                Register
            </Text>
            <Text>
                You have an account ?{' '}
                <NavLink className='underline font-medium' to='/login'>
                    Login In
                </NavLink>
            </Text>
            <form className='space-y-5' onSubmit={submitHandler}>
                <div>
                    <label htmlFor='username'>Full Name:</label>
                    <input
                        name='name'
                        type='text'
                        id='username'
                        value={user.name}
                        onChange={changeHandler}
                        placeholder='Enter your full name'
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        name='email'
                        type='email'
                        value={user.email}
                        onChange={changeHandler}
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
                        value={user.password}
                        onChange={changeHandler}
                        placeholder='Enter your password'
                    />
                </div>
                <Button className='bg-[var(--primary)] text-white rounded px-10 mx-auto'>
                    Register Now
                </Button>
            </form>
        </div>
    );
};

export default Register;
