import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthLayout from './components/AuthLayout';
import { Home, Blog, Work, Contact, Register, Login, CreateBlog, CreateWork } from './pages';

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
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Pages;
