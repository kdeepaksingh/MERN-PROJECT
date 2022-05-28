import React from "react";
import deepak from '../components/images/admin.jpg'
import "../styles/About.css";

const About = () => {
    return (
        <>
            <div className="about_us_form_style">
                <div className="">
                    <h1 className="about_us_header">ABOUT ME</h1>
                </div>
                <form>
                    <div className="row">
                        <div className="col-4">
                            <img src={deepak} alt="Deepak Profile" className="about_img" />
                        </div>
                        <div className="col-4">
                            <div className="profile_head">
                                <h5>Deepak Singh</h5>
                                <h6>MERN Stack Developer</h6>
                                <p className="mt-3">Ratings :<small>1/10</small></p>
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="text"><i className="fa fa-edit"></i>Edit Profile</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <div className="popup-title-bg mt-2" style={{width:'200px',marginLeft:'165px'}}>
                                <label className="label-font">Social Links</label>
                            </div>
                            <div className="">
                                <a href="https://www.facebook.com/singh.deepak.9216">
                                    <i className="fa fa-facebook fa-2x icon_style" aria-hidden="true"></i>
                                </a>
                                <a href="deepak.rajput1997">
                                    <i className="fa fa-instagram fa-2x icon_style" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/depak-singh-o4ab500169">
                                    <i className="fa fa-twitter fa-2x icon_style" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/depak-singh-o4ab500169">
                                    <i className="fa fa-linkedin fa-2x icon_style" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.facebook.com/singh.deepak.9216">
                                    <i className="fa fa-gitlab fa-2x icon_style" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/depak-singh-o4ab500169">
                                    <i className="fa fa-youtube fa-2x icon_style" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="popup-title-bg mt-2" style={{width:'200px'}}>
                                <label className="label-font">About Profile</label>
                            </div>
                            <div className="">
                                <div className="d-flex profile_content">
                                    <label>User ID :</label>
                                    <p>USER789654</p>
                                </div>
                                <div className="d-flex profile_content">
                                    <label>Name :</label>
                                    <p>Deepak Singh</p>
                                </div>
                                <div className="d-flex profile_content">
                                    <label>Email :</label>
                                    <p>deepuji8255@gmail.com</p>
                                </div>
                                <div className="d-flex profile_content">
                                    <label>Phone :</label>
                                    <p>8290886498</p>
                                </div>
                                <div className="d-flex profile_content">
                                    <label>Profession :</label>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="popup-title-bg mt-2" style={{width:'200px'}}>
                                <label className="label-font">Timeline</label>
                            </div>
                            <div className="">
                                <div className="d-flex profile_content">
                                    <label>Experience :</label>
                                    <p>Expert</p>
                                </div>
                                <div className="d-flex profile_content">
                                    <label>Hourly Rate :</label>
                                    <p>10$/hr</p>
                                </div>
                                <div className="d-flex profile_content">
                                    <label>Total Project :</label>
                                    <p>50</p>
                                </div>
                                <div className="d-flex profile_content">
                                    <label>English Level :</label>
                                    <p>Expert</p>
                                </div>
                                <div className="d-flex profile_content">
                                    <label>Availability :</label>
                                    <p>6 months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About;