import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { getDB } from '../../AllFunctions/LoginRegister';
import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const [user, setUser] = useContext(UserContext)
    const userDB = getDB("user");
    console.log(user);
    return (
        Object.keys(user).length > 0 || Object.keys(userDB).length > 0
            ? children
            : <Navigate to="/login" />
    );
};

export default PrivateRoute;