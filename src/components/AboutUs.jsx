import React from "react";
import classes from "../modules/AboutUs.module.scss";

const AboutUs = () => {
    return (
        <div className={classes.aboutUs}>
            <h1>About Us</h1>
            <p>
                Welcome to our store! We are passionate about offering the best products at the most competitive prices.
                Our mission is to provide exceptional service and an enjoyable shopping experience.
            </p>
            <p>
                Thank you for visiting us. We hope you find exactly what you're looking for!
            </p>
        </div>
    );
};

export default AboutUs;
