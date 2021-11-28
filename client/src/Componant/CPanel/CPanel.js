import React from 'react';
import NavBar from '../Navbar/NavBar';
import {
    Outlet
} from "react-router-dom";
const CPanel = () => {
    return (
        <div className="cPanelPage">
            <NavBar></NavBar>
            <Outlet/>
        </div>
    );
};

export default CPanel;