import { createSlice } from '@reduxjs/toolkit';

const fetchDataSlice = createSlice({
    name: 'posts',
    initialState: {
        blogs: [],
        works: [],
    },
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        getWorks: (state, action) => {
            state.works = action.payload;
        },
    },
});

export const { getBlogs, getWorks } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;
