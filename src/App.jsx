import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from './redux/authSlice';
import { getBlogs, getWorks } from './redux/fetchDataSlice';
import { authService, blogService, workService } from './appwrite';
import Routes from './Routes';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getUserData() {
            try {
                const user = await authService.getCurrentUser();
                const currUser = user.$id ? user : {};
                dispatch(loginUser(currUser));
            } catch (error) {
                console.log(error);
                dispatch(logoutUser());
            }
        }
        getUserData();
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogs = await blogService.getAllBlogPosts();
                const works = await workService.getAllWorkPosts();
                dispatch(getBlogs(blogs.documents));
                dispatch(getWorks(works.documents));
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <div id='mode'>
            <Routes />
        </div>
    );
};

export default App;
