import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from './redux/authSlice';
import { authService } from './appwrite';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header, Footer, AuthLayout } from './components';
import {
  Contact,
  NotFoundPage,
  Home,
  Login,
  Register,
  BlogListing,
  BlogCreate,
  BlogUpdate,
  WorkListing,
  WorkCreate,
} from './pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserData() {
      try {
        const user = await authService.getCurrentUser();
        const currUser = user.$id ? user : {};
        dispatch(loginUser(currUser));
      } catch (error) {
        dispatch(logoutUser());
        console.log(error);
      }
    }
    getUserData();
  }, [dispatch]);

  return (
    <div id='mode'>
      <BrowserRouter>
        <Header />
        <div className='min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<BlogListing />} />
            <Route path='/work' element={<WorkListing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<AuthLayout authentication />}>
              <Route path='/create/blog' element={<BlogCreate />} />
              <Route path='/create/blog/:slug' element={<BlogUpdate />} />
              <Route path='/create/work' element={<WorkCreate />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
