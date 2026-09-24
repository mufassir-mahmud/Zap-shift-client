import React from 'react';
import Loader from '../Components/Loader/Loader';
import ForbidenAccess from '../Components/ForbidenAccess/ForbidenAccess';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';

const RidersRoute = ({children}) => {
    const { loader, user} = useAuth();
    const {role, roleLoading} = useRole();
    if(loader || !user || roleLoading){
        return <Loader></Loader>
    }    
    if(role !== 'rider'){
        return <ForbidenAccess></ForbidenAccess>
    }
    return children;
};

export default RidersRoute;