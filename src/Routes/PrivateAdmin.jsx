import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SetRole from '../hooks/SetRole';
import useAuth from '../hooks/useAuth';




const PrivateAdmin = ({children}) => {
    const loc = useLocation()
    const { loading, user } = useAuth()
    const { data, refetch, isLoading } = SetRole()
    if (loading || isLoading) {
        return <div></div>
    }
    if (user && data?.role === 'admin') {
        return children
    }
    else {
        return <Navigate to="/" state={loc.pathname}></Navigate>
    }
};

export default PrivateAdmin;