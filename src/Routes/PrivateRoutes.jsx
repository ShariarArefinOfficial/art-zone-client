//import React from 'react';

import { Navigate, useLocation } from "react-router-dom";
import useAuthHook from "../Hook/useAuthHook";

const PrivateRoutes = ({children}) => {
      const {user, loading}=useAuthHook();
      const location = useLocation();
      if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;