import React from 'react';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='text-dark main-container text-center'>
            <ul className='flex space-x-10 mx-auto w-fit py-5'>
                <li>
                    <NavLink to='https://www.linkedin.com/in/adarshvermadeveloper' target='__blank'>
                        <FaLinkedin className='text-3xl hover:opacity-80 duration-300' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://github.com/AdarshTheki' target='__blank'>
                        <FaGithubSquare className='text-3xl hover:opacity-80 duration-300' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://twitter.com/AdarshV85809682' target='__blank'>
                        <FaTwitterSquare className='text-3xl hover:opacity-80 duration-300' />
                    </NavLink>
                </li>
            </ul>
            <strong>Copyright ©{new Date().getFullYear()} All rights reserved </strong>
        </div>
    );
}
