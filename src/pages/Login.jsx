import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { authService } from '../appwrite';
import { Text } from '../utils';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({ email: '', password: '' });

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { email, password } = userData;

        if (!(email || password)) {
            alert('Please Fill Your Inputs');
        } else {
            const user = await authService.login({ email, password });
            if (!user?.$id) {
                alert('Invalid User Please Try Again!');
            } else {
                dispatch(loginUser(user));
                navigate('/');
            }
        }
        setLoading(false);
    };

    return (
        <div className='max-w-[500px] space-y-8 mx-auto p-5'>
            <Text as='h2' className='text-4xl font-semibold'>
                Login
            </Text>
            <Text>
                Don't have an account ?{' '}
                <NavLink className='underline font-medium hover:text-secondary' to='/register'>
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
                        value={userData.email}
                        onChange={(e) =>
                            setUserData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder='Enter your email address...'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        value={userData.password}
                        onChange={(e) =>
                            setUserData((prev) => ({ ...prev, password: e.target.value }))
                        }
                        placeholder='Enter your password'
                    />
                    {!!userData.password && (
                        <span className='text-[var(--dark)] text-xs'>
                            show password : {userData.password}
                        </span>
                    )}
                </div>
                <button className='bg-primary hover:bg-primary/80 py-2 text-white rounded px-10 mx-auto'>
                    {loading ? 'Loading...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
