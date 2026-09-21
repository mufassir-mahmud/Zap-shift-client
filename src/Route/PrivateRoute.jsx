import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user,loader} = useAuth()
    const location = useLocation()
    if(loader){
       return <Loader></Loader>
    }
  if (!user) {
    return (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        />
    );
}
    return children;
};

export default PrivateRoute;