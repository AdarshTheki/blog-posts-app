import Button from './Button';
import Text from './Text';

// formate date : march 11, 2024
const formattedDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
};

export { Button, Text, formattedDate };
