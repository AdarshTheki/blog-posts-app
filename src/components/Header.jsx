import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../utils/Button';
import { MdLightMode } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { authService } from '../appwrite/authService';
import { logoutUser } from '../redux/authSlice';

const Header = () => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.auth);

    const styles = ({ isActive }) => ({
        color: isActive ? 'var(--primary)' : '',
    });

    const logoutHandler = async () => {
        await authService.logout();
        dispatch(logoutUser());
    };

    const colorChange = () => {
        let mode = document.getElementById('mode');
        mode.classList.toggle('dark-mode');
    };

    return (
        <div className='main-container'>
            <ul className='flex py-3 flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 font-medium'>
                <li>
                    <NavLink to='/' style={styles} className='hover:text-[var(--primary)]'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/work' style={styles} className='hover:text-[var(--primary)]'>
                        Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blog' style={styles} className='hover:text-[var(--primary)]'>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' style={styles} className='hover:text-[var(--primary)]'>
                        Contact
                    </NavLink>
                </li>
                <Button
                    leftIcon={<MdLightMode />}
                    onClick={() => colorChange()}
                    className='border-[var(--dark)] text-xs border text-[var(--dark)] rounded'>
                    Change Mode
                </Button>
                {!status ? (
                    <li>
                        <NavLink to='/login' style={styles} className=' uppercase hover:text-[var(--primary)]'>
                            login
                        </NavLink>
                    </li>
                ) : (
                    <Button
                        onClick={logoutHandler}
                        className='uppercase bg-red-500 rounded-lg text-white text-xs'>
                        logout
                    </Button>
                )}
            </ul>
        </div>
    );
};

export default Header;
