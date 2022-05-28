import React from "react";
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
            <div className="error_page">
                <div className="">
                    <h1 className="error_page_header">WELCOME TO ERROR PAGE NOT FOUND</h1>
                </div>
                <div className="" style={{ textAlign: 'center' }}>
                    <label>Welcome To 404 Page</label>
                    <p>We are Soory , Page Not Found!</p>
                    <NavLink to="/" className="error_page_style"><i className="fa fa-sign-in"></i>Back To Home</NavLink>
                </div>
            </div>
        </>
    )
}

export default Errorpage;