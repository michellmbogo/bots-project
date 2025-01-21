import React from "react";
function Products(props) {
    const products = props.products;

    return (
        <div>
            <section id="catalog">
                <h2>Products</h2>
                <div id="products-container">

                    {
                        products.map((product) => {
                            return (
                                <div className="card" onclick="openDetails(product)">
                                    <img src={product.image} alt={product.image} className="sunglass_image" />

                                    <div className="card-body">
                                        <h3>{product.name}</h3>
                                        <p classn="price">{`Price: KES ${product.price}`}</p>
                                    </div>

                                    <div className="card-footer">
                                        <button 
                                        style={{
                                            backgroundColor: '#007bff'
                                        }} 
                                        onClick={()=>props.addToCart(product)}>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </div>
    );
}

export default Products;