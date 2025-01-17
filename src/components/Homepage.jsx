import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../modules/Homepage.module.scss";

const Homepage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const navigateToStore = () => {
        navigate("/store");
    };

    return (
        <div className={classes["homepage"]}>
            <h1>Welcome to the Landing Page!</h1>
            <button onClick={navigateToStore}>Go to Store</button>
        </div>
    );
};

export default Homepage;
