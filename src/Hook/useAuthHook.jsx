//import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
const useAuthHook = () => {
  const AuthProvidersData=useContext(AuthContext);

    
    return AuthProvidersData;
};

export default useAuthHook;
