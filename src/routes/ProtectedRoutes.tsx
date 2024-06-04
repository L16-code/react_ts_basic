import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ProtectedRoutesProps } from '../interfaces/AuthInterface';

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoutes;
