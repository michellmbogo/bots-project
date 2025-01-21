import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import data from './Data';
import './index.css';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check whether this item already exists in cart
    const itemExists = cart.some((item) => item.id == product.id);
    if(itemExists){
      alert("Item already exists in cart!");
      return;
    }
     const cartItem = {
        ...product,
        count: 1
     };
     setCart([...cart, cartItem]);
  }

  const removeItemFromCart = (productId)=>{
    const newCart = cart.filter((item)=> item.id !== productId);

    setCart(newCart)
  }

  const increaseQuantity = (productId) => {
    const newCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          count: item.count + 1
        }
      }
      return { ...item };
    })

    setCart(newCart);
  }

  const decreaseQuantity = (productId) => {
    const newCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          count: item.count - 1 < 1 ? item.count  : item.count - 1
        }
      }
      return { ...item };
    })

    setCart(newCart);
  }
  
  
  
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products products={data} addToCart={addToCart} />
      <Cart cart={cart} removeItemFromCart={removeItemFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
      <Footer />
    </div>
  );
}

export default App;
