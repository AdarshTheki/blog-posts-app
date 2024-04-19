import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../utils/Button';
import { MdLightMode } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { authService } from '../appwrite/authService';
import { logoutUser } from '../redux/authSlice';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const styles = ({ isActive }) => ({
        color: isActive ? 'var(--primary)' : '',
    });

    const logoutHandler = async () => {
        setLoading(true);
        await authService.logout();
        dispatch(logoutUser());
        setLoading(false);
    };

    const colorChange = () => {
        let mode = document.getElementById('mode');
        mode.classList.toggle('dark-mode');
    };

    return (
        <div className='main-container relative'>
            <div
                className={
                    isSidebarOpen
                        ? 'block fixed top-0 left-0 h-full w-full bg-opacity-90 bg-gray-800 z-20 '
                        : 'hidden'
                }>
                <div className='flex justify-end p-4'>
                    <button className='text-white' onClick={toggleSidebar}>
                        <IoMdClose />
                    </button>
                </div>
                <nav>
                    <ul className='flex flex-col items-center justify-center gap-5 text-xl capitalize'>
                        <li className='py-2'>
                            <NavLink to='/' style={styles} className='text-white'>
                                Home
                            </NavLink>
                        </li>
                        <li className='py-2'>
                            <NavLink to='/blog' style={styles} className='text-white'>
                                Blog
                            </NavLink>
                        </li>
                        <li className='py-2'>
                            <NavLink to='/work' style={styles} className='text-white'>
                                work
                            </NavLink>
                        </li>
                        <li className='py-2'>
                            <NavLink to='/contact' style={styles} className='text-white'>
                                Contact
                            </NavLink>
                        </li>
                        {!status ? (
                            <li>
                                <NavLink
                                    to='/login'
                                    style={styles}
                                    className='uppercase rounded-lg hover:bg-secondary/80 text-white text-xs px-4 py-2 font-semibold bg-secondary  duration-200'>
                                    login
                                </NavLink>
                            </li>
                        ) : (
                            <button
                                onClick={logoutHandler}
                                className='uppercase rounded-lg bg-primary text-white text-xs px-4 py-2 font-semibold hover:bg-primary/80  duration-200'>
                                {loading ? 'loading...' : 'logout'}
                            </button>
                        )}
                    </ul>
                </nav>
            </div>
            <div className='flex md:hidden items-center justify-between h-[80px]'>
                <button onClick={toggleSidebar}>
                    <FaBars className='text-[var(--dark)]'/>
                </button>
                <Button
                    leftIcon={<MdLightMode />}
                    onClick={() => colorChange()}
                    className='border-[var(--dark)] text-xs border text-[var(--dark)] rounded'>
                    Change Mode
                </Button>
            </div>
            <div className='relative md:flex hidden items-center justify-between h-[80px]'>
                <Button
                    leftIcon={<MdLightMode />}
                    onClick={() => colorChange()}
                    className='border-[var(--dark)] text-xs border text-[var(--dark)] rounded'>
                    Change Mode
                </Button>
                <ul className='flex items-center justify-center sm:justify-end gap-x-6'>
                    <li>
                        <NavLink to='/' style={styles} className='hover:text-primary'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/work' style={styles} className='hover:text-primary'>
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' style={styles} className='hover:text-primary'>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' style={styles} className='hover:text-primary'>
                            Contact
                        </NavLink>
                    </li>
                    {!status ? (
                        <li>
                            <NavLink
                                to='/login'
                                style={styles}
                                className='uppercase rounded-lg hover:bg-secondary/80 text-white text-xs px-4 py-2 font-semibold bg-secondary  duration-200'>
                                login
                            </NavLink>
                        </li>
                    ) : (
                        <button
                            onClick={logoutHandler}
                            className='uppercase rounded-lg bg-primary text-white text-xs px-4 py-2 font-semibold hover:bg-primary/80  duration-200'>
                            {loading ? 'loading...' : 'logout'}
                        </button>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header;
