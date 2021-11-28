import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false)
    const [passCheck, setPassCheck] = useState("")
    const pass = document.getElementById("pass")
    const cpass = document.getElementById("cpass")
    const onSubmit = data => {
        if (pass.value !== cpass.value) {
            setPassCheck("Password not matched")
        }
        else {
            setPassCheck("")
            console.log(data)
            data.password = window.atob(data.password)
        }
    };
    return (
        <div className="loginpage">
            <div className="col-md-5 p-2">
                <div className="form">
                    <h2 className="display-6 text-center text-primary"><Link className='clickEffect' style={{ textDecoration: "none" }} to="/">LMS</Link> Register</h2>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <input type="text" className="form-control-lg form-control " placeholder="Username " {...register("username", {
                            required: "Username required",
                            maxLength: {
                                value: 15,
                                message: "Username can't exceed 15 character"
                            }
                        })} />
                        {errors.username && <span className="invalid-feedback d-inline-block">{errors.username.message}</span>}


                        <input type="email" className="form-control-lg form-control " placeholder="Email" {...register("email", { required: "Email required" })} />
                        {errors.email && <span className="invalid-feedback d-inline-block">{errors.email.message}</span>}


                        <input id="pass" className="form-control  form-control-lg " type={showPass ? "text" : "password"} placeholder="Password"  {...register("password", { required: "Password Required", minLength: { value: 6, message: "Password must be more than 6 characters" } })} />
                        {errors.password && <span className=" d-inline-block invalid-feedback">{errors.password.message}</span>}

                        <input id="cpass" className="form-control  form-control-lg " type={showPass ? "text" : "password"} placeholder="Confirm Password"  {...register("confirmPassword", { required: "Confirm your password" })} />
                        {errors.confirmPassword && <span className=" d-inline-block invalid-feedback">{errors.confirmPassword.message}</span>}
                        {passCheck && <span className=" d-inline-block invalid-feedback">{passCheck}</span>}
                        <label>
                            <input className="form-check-input mx-1" type="checkbox" onChange={() => setShowPass(!showPass)} />
                            Show Password
                        </label>

                        <select className="form-control" defaultValue="" {...register("type", { required: "Please Select One" })} >
                            <option value="" disabled>Designation - Please Select</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                        </select>
                        {errors.type && <span className=" d-inline-block invalid-feedback">{errors.type.message}</span>}
                        <div className="text-center">
                            <input className="btn clickEffect btn-block w-50 btn-outline-primary btn-lg" type="submit" value="Register" />
                        </div>

                    </form>
                    <hr />
                    <div className="text-center">
                        Already have an acoount?<span className="text-primary adminSwitcher " >
                            <Link className='clickEffect' style={{ textDecoration: "none" }} to="/login">Login</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;