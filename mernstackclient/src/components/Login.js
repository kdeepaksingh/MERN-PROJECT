import React, { useState } from "react";
import user from '../components/images/deepak.jpg'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("/userapi/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, password: password
            })
        });

        const data = res.json();

        if (!data) {
            window.alert("invalid credentials");
        } else {
            window.alert("login Successfully !");
            navigate("/");
        }
    }
    return (
        <div className="w-100">
            <div className="login-bg">
                <h1 className="Sign-In-Header">SIGN IN HERE</h1>
            </div>
            <form className="login_form_style" method="POST">
                <img src={user} alt="User" />
                <div className="">
                    <div className="input-box">
                        <span><i className="fa fa-envelope-o"></i></span>
                        <input type="email" name="email" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email" />
                    </div>
                    <div className="input-box">
                        <span><i className="fa fa-key"></i></span>
                        <input type="password" name="password" id="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Your Password" />
                    </div>
                    <div className="d-flex" style={{ marginLeft: '60px', padding: '8px' }}>
                        <button type="submit" name="signin" id="signin" onClick={loginUser}><i className="fa fa-sign-in"></i>Login</button>
                        <div className="" style={{ marginLeft: '25px' }}>
                            <NavLink className="already_login_style" to="/register">Don't Have Acc?
                                <strong style={{ color: '#050f87' }}>Sign Up</strong></NavLink>
                        </div>
                        <div className="">
                            <p className="ustify-content-end">
                                <NavLink className="forgot_text_style" to="/register">Forgot password?</NavLink></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;