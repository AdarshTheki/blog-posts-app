import React from 'react';

const Button = ({ children, leftIcon, rightIcon, className = '', ...props }) => {
    return (
        <button
            className={`${className} flex items-center gap-2 px-6 py-2 font-semibold hover:opacity-75 duration-300`}
            {...props}>
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

export default Button;
