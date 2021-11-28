import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { loginToWeb } from '../../AllFunctions/LoginRegister';
import "./Login.css"

const Login = () => {

    // state handle
    const [switchForm, setSwitchForm] = useState(true)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    // form handle

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onFormSwitch = () => {
        setSwitchForm(!switchForm)
    };
    const onSubmit = data => {
        if (!switchForm) {
            data.email = "admin"
        }
        if (!data.email.includes("@")) {
            data.username = data.email;
            data.email = ""
        }
        else {
            data.username = ""
        }
        data.password = window.btoa(unescape(encodeURIComponent(data.password)))
        console.log(data);
        loginToWeb(data)
        navigate("/cpanel")
        // console.log(data)
    };
    return (
        <div className="loginpage">
            <div className="col-md-5 p-2">
                <div className="form">
                    <h2 className="display-6 text-center text-primary"> <Link className='clickEffect' style={{ textDecoration: "none" }} to="/">LMS</Link> Login</h2>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        {switchForm &&
                            <span>
                                <input className="form-control-lg form-control clearOnSwitch" placeholder="Username or Email" {...register("email", { required: true })} />
                                {errors.email && <span className="invalid-feedback">Email required</span>}
                            </span>

                        }
                        <input className="form-control clearOnSwitch form-control-lg " type={showPass ? "text" : "password"} placeholder={switchForm ? "Password" : "Secret Admin Key"}  {...register("password", { required: true, minLength: 6 })} />
                        {errors.password && <span className="invalid-feedback">Password required</span>}
                        <label>
                            <input className="form-check-input mx-1" type="checkbox" onChange={() => setShowPass(!showPass)} />
                            Show {switchForm ? "Password" : "Secret Key"}
                        </label>

                        <div className="text-center">
                            <input className="btn clickEffect btn-block w-50 btn-outline-primary btn-lg" type="submit" value="Login" />
                        </div>

                    </form>
                    <div className="text-center">
                        Are you {switchForm ? "an admin" : "a student"}?
                        <span
                            className="text-primary adminSwitcher"
                            onClick={onFormSwitch}
                        > Click here</span>
                    </div>
                    <hr />
                    <div className="text-center">
                        New Member?<span className="text-primary adminSwitcher " >
                            <Link className='clickEffect' style={{ textDecoration: "none" }} to="/Register">Register</Link>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;