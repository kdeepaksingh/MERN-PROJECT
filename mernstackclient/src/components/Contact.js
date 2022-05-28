import React from "react";

const Contact = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="contact_us_address">
                            <i className="fa fa-whatsapp"></i>
                            <label>Whatsapp No</label>
                            <p>+91 8290886498</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="contact_us_address">
                            <i className="fa fa-mobile"></i>
                            <label>Contact No</label>
                            <p>+91 8619907157</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="contact_us_address">
                            <i className="fa fa-envelope"></i>
                            <label>Email</label>
                            <p>deepaksingh@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="contact_us_address">
                            <i className="fa fa-address-card"></i>
                            <label>Address</label>
                            <p>Ramnagar Varanasi</p>
                        </div>
                    </div>
                </div>
                <div className="contact_us_form_style">
                    <div className="">
                        <h1 className="contact_us_header">GET IN TOUCH</h1>
                    </div>
                    <div class="input-box">
                        <span><i className="fa fa-user-o"></i></span>
                        <input type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="input-box">
                        <span><i className="fa fa fa-phone"></i></span>
                        <input type="text" placeholder="Enter Contact Number" />
                    </div>
                    <div className="input-box">
                        <span><i className="fa fa-envelope-o"></i></span>
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="message-box">
                        <small className="textareaspan"><i className="fa fa-envelope-o"></i></small>
                        <textarea placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" style={{ marginLeft: '10%' }}><i className="fa fa-sign-in"></i>Send Message</button>
                </div>
            </div>
        </>
    )
}

export default Contact;