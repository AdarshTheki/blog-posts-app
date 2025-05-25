import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Protected({ children }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const authentication = !!user?.userData?.$id;
  const [loader, setLoader] = useState(true);
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authentication && status !== authentication) {
      navigate('/login');
    } else if (!authentication && status !== authentication) {
      navigate('/');
    }
    setLoader(false);
  }, [status, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <Outlet>{children}</Outlet>;
}
