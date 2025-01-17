import { Link } from "react-router-dom";
import classes from "../modules/Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={classes["navbar"]}>
            <ul className={classes["navbar-list"]}>
                <li>
                    <Link to="/store" className={classes["navbar-item"]}>Home</Link>
                </li>
                <li>
                    <Link to="/cart" className={classes["navbar-item"]}>Cart</Link>
                </li>
                <li>
                    <Link to="/about" className={classes["navbar-item"]}>About Us</Link>
                </li>
                <li>
                    <Link to="/contact" className={classes["navbar-item"]}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
