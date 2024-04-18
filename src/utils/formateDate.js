export const formattedDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
};
