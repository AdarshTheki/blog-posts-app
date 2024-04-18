import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import fetchDataReducer from './fetchDataSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        fetchData: fetchDataReducer,
    },
});
export default store;
