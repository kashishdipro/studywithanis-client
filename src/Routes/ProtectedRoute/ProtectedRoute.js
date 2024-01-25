import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading/Loading';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading/>
    }
    if(user && user.uid){
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace/>;
};

export default ProtectedRoute;