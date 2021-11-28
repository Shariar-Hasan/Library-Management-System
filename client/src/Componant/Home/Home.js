import React from 'react';
import { useNavigate } from 'react-router';
import { getDB } from '../../AllFunctions/LoginRegister';
import logopath from "./../../images/favicon.png"
import "./Home.css"
const Home = () => {
    const navigate = useNavigate()
    const handleRouteOnBtnClick = (routePath) => {
        navigate(routePath)
    }
    if (getDB("user")) {
        navigate("cpanel")
    }
    

    return (
        <div className="homepage">
            <div className="col-md-5 p-4 text-center">
                <div>
                    <h3 className="display-3 text-primary"><img style={{width : "80px"}} src={logopath} alt="LMS logo"/>LMS</h3><div className="decider">
                        <button onClick={() => handleRouteOnBtnClick("/login")} className="btn btn-outline-primary"> Login</button>
                        <button onClick={() => handleRouteOnBtnClick("/register")} className="btn btn-outline-primary ">Register</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Home;