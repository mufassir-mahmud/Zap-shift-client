import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Loader from '../Components/Loader/Loader';
import ForbidenAccess from '../Components/ForbidenAccess/ForbidenAccess';

const AdminRoute = ({children}) => {
    const {user, loader} = useAuth();
    const {role, roleLoading} = useRole();
    if(loader || roleLoading){
        return <Loader></Loader>
    }    
    if(role !== 'admin'){
        return <ForbidenAccess></ForbidenAccess>
    }
    return children;
};

export default AdminRoute;