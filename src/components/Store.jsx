import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import classes from "../modules/Store.module.scss";

const Store = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [cart, setCart] = useState({});

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch items");
                setLoading(false);
            });
    }, []);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[item.id]) {
                newCart[item.id].quantity += 1;
            } else {
                newCart[item.id] = { ...item, quantity: 1 };
            }
            return newCart;
        });
    };

    const removeFromCart = (item) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[item.id]?.quantity > 1) {
                newCart[item.id].quantity -= 1;
            } else {
                delete newCart[item.id];
            }
            return newCart;
        });
    };

    return (
        <div>
            <Navbar />

            {loading && <p>Loading items...</p>}
            {error && <p>{error}</p>}

            <div className={classes["items-list"]}>
                {items.map((item) => (
                    <div key={item.id} className={classes["item"]}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>

                        <button onClick={() => addToCart(item)}>
                            Add to Cart
                        </button>

                        {cart[item.id] && (
                            <div className={classes["cart-controls"]}>
                                <button onClick={() => removeFromCart(item)}>
                                    -
                                </button>
                                <span>{cart[item.id].quantity}</span>
                                <button onClick={() => addToCart(item)}>
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
