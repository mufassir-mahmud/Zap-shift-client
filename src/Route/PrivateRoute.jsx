import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loader} = useAuth()
    if(loader){
        return <div className='h-full w-full mx-auto'>
            <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
<span className="loading loading-ball loading-xl"></span>
        </div>
    }
    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoute;