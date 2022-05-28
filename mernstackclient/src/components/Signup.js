import React ,{useState}from "react";
import { NavLink, useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate  = useNavigate();
    const [user, setUser] = useState({
        name: '', email: '', phone: '', work: '', password: '', cpassword: ''
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const signupData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch("/userapi/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, email: email, phone: phone, work: work, password: password, cpassword: cpassword
            })
        });
        console.log(res);
        const data = await res.json();
        console.log(data);
        if (!data) {
            window.alert("invalid Registration");
            console.log("invalid register");
        } else {
            window.alert("Registration Successfull!");
            // history.pushState("/login");
            console.log("register Successfully");
            navigate("/login");
        }
    }
    return (
        <div className="w-100">
            <div className="signup-bg">
                <h1 className="Sign-Up-Header">SIGN UP HERE</h1>
            </div>
            <form className="form_style d-flex" method="POST" id="register-form">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="input-box">
                        <span><i className="fa fa-user-o"></i></span>
                        <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Enter Your Name" />
                    </div>
                    <div className="input-box">
                        <span><i className="fa fa fa-envelope"></i></span>
                        <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs} placeholder="Enter Your Email" />
                    </div>
                    <div className="input-box">
                        <span><i className="fa fa-phone"></i></span>
                        <input type="text" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs} placeholder="Enter Your Phone" />
                    </div>
                    <div className="input-box">
                        <span><i className="fa fa-address-card"></i></span>
                        <input type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInputs} placeholder="Enter Your Profession" />
                    </div>
                    <div className="input-box">
                        <span><i className="fa fa-key"></i></span>
                        <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs} placeholder="Enter Your Password" />
                    </div>
                    <div className="input-box">
                        <span><i className="fa fa-key"></i></span>
                        <input type="cpassword" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs} placeholder="Enter Your Confirm Password" />
                    </div>
                    <div className="d-flex" style={{ marginLeft: '90px' }}>
                        <div className="">
                            <button type="submit" name="signup" value="register" onClick={signupData}><i className="fa fa-sign-in"></i>Sign Up</button>
                        </div>
                        <div className="" style={{ marginLeft: '10px' }}>
                            <button type="submit"><i className="fa fa-refresh"></i>Reset</button>
                        </div>
                        <div className="">
                            <NavLink className="already_acc_style" to="/login">Do You Have Already Acc?
                                <strong style={{ color: '#050f87' }}>Sign In</strong></NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-2">

                </div>
            </form>
        </div>
    )
}

export default Signup;