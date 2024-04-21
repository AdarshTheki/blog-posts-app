/* eslint-disable react/prop-types */
import React from 'react';

const Text = ({ children, className = '', as }, props) => {
    const Component = as || 'p';

    return (
        <Component className={`${className} text-[var(--dark)] text-wrap `} {...props}>
            {children}
        </Component>
    );
};
export default Text;
