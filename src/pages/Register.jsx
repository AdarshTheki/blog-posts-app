import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../appwrite';
import { loginUser } from '../redux/authSlice';
import { Text } from '../utils';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { name, password, email } = userData;

        if (!(email || password || name)) {
            alert('Please Fill Your Inputs');
        } else {
            const user = await authService.register({ email, password, name });
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
                Register
            </Text>
            <Text>
                You have an account ?{' '}
                <NavLink className='underline font-medium hover:text-secondary' to='/login'>
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
                        value={userData.name}
                        onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder='Enter your full name'
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        name='email'
                        type='email'
                        value={userData.email}
                        onChange={(e) =>
                            setUserData((prev) => ({ ...prev, email: e.target.value }))
                        }
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
                <button className='bg-primary hover:bg-primary/80 text-white rounded px-10 py-2 mx-auto'>
                    {loading ? 'loading...' : 'Register Now'}
                </button>
            </form>
        </div>
    );
};

export default Register;
