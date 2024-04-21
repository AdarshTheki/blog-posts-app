import React from 'react';
import parse from 'html-react-parser';
import { formattedDate, Text } from '../utils';

const PosterSection = ({ $id, heading, $updatedAt, type, content }) => {
    return (
        <div className='space-y-3 font-serif'>
            <Text as='h2' className='text-2xl font-semibold'>
                {heading}
            </Text>
            <Text className=' font-semibold'>
                <span className='px-4 py-1 text-xs bg-primary font-semibold rounded-3xl text-white'>
                    {formattedDate($updatedAt)}
                </span>{' '}
                | <span>{type}</span>
            </Text>
            <Text>{parse(content)}</Text>
        </div>
    );
};

export default PosterSection;
