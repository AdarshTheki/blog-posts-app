import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header, Footer, AuthLayout } from './components';
import {
    Home,
    Blog,
    Work,
    Contact,
    Register,
    Login,
    CreateBlog,
    CreateWork,
    NotFoundPage,
} from './pages';

const Pages = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className='min-h-screen'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/work' element={<Work />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route element={<AuthLayout authentication />}>
                            <Route path='/create/blog' element={<CreateBlog />} />
                            <Route path='/create/work' element={<CreateWork />} />
                        </Route>
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Pages;
