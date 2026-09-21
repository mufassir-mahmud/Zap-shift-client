import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loader} = useAuth()
    const location = useLocation()
    if(loader){
        return <div className='h-full w-full mx-auto'>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-xl"></span>
        </div>
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