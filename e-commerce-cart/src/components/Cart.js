import React from "react";
function Cart(props) {
    const cart = props.cart;

    return (
        <div id="cart_section" className="section cart">
            <h2>Cart</h2>
            <section id="cart" >
                {
                    cart.map((product) => {
                        return (
                            <div id="cart">
                                <div className="item">
                                    <img src={product.image} alt={product.name} />

                                    <div>
                                        <h4>{`Name: ${product.name}`}</h4>
                                        <p>{`Quantity: ${product.count}`}</p>
                                        <p>{`Price: ${product.count} x ${product.price} = KES ${product.count * product.price}`}</p>
                                    </div>

                                    <div className="controls">
                                        <button id="decrease" className="decrease-product" onClick={() => props.decreaseQuantity(product.id)}>-</button>
                                        <span id="count">{product.count}</span>
                                        <button id="increase" className="increase-product" onClick={() => props.increaseQuantity(product.id)}>+</button>
                                    </div>

                                    <div>
                                        <button id="remove" className="remove-cart" onClick={() => props.removeItemFromCart(product.id)}>Remove</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }

            </section>

        </div>
    );
} export default Cart