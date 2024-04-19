import React from 'react';
import { Text } from '../utils/Text';
import { formattedDate } from '../utils/formateDate';
import parse from 'html-react-parser';
import { workService } from '../appwrite/workService';

const PosterImgSection = ({ id, heading, content, $updatedAt, type, image_url }) => {
    const fetchUrl = () => {
        const url = workService.getFilePreview(image_url);
        return url;
    };

    return (
        <div key={id} className='sm:flex w-full gap-[5%] border-b pb-4 mb-4 font-sans'>
            <div className='sm:w-[35%]'>
                <img src={fetchUrl()} alt={id} className='w-full' />
            </div>
            <div className='space-y-4 sm:w-[60%]'>
                <Text as='h2' className='text-2xl font-semibold'>
                    {heading}
                </Text>
                <div className='space-x-4'>
                    <Text
                        as='span'
                        className='px-4 py-1 text-xs bg-primary font-semibold rounded-3xl text-white'>
                        {formattedDate($updatedAt)}
                    </Text>
                    <Text as='span'>{type}</Text>
                </div>
                <div className='text-[var(--dark)] space-y-3'>{parse(content)}</div>
            </div>
        </div>
    );
};

export default PosterImgSection;
