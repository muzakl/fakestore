import React, { useState, useEffect } from "react";
import classes from "../modules/Cart.module.scss";

const Cart = ({ cart = {}, setCart }) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        for (let id in cart) {
            total += cart[id].price * cart[id].quantity;
        }
        setTotalPrice(total);
    }, [cart]);

    const handleCheckout = () => {
        setIsCheckout(true);
        setTimeout(() => {
            setCart({});
            window.location.reload();
        }, 2000);
    };

    return (
        <div className={classes.cart}>
            {Object.keys(cart).length === 0 ? (
                <p>Add a product to the cart to begin</p>
            ) : (
                <div>
                    <div className={classes["cart-items"]}>
                        {Object.values(cart).map((item) => (
                            <div key={item.id} className={classes["cart-item"]}>
                                <img src={item.image} alt={item.title} />
                                <div className={classes["cart-item-details"]}>
                                    <h2>{item.title}</h2>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                    <p>Total: ${item.price * item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={classes["checkout-container"]}>
                        <div className={classes["total-price"]}>
                            <span>Total Price: ${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className={classes["checkout-btn"]} onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>

                    {isCheckout && <p className={classes.success}>Successful</p>}
                </div>
            )}
        </div>
    );
};

export default Cart;
