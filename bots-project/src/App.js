import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import BotCollection from './Components/BotCollection';
import BotArmy from './Components/BotArmy';
import { useEffect } from 'react';



function App() {

  function fetchBot(){
      fetch('http://localhost:8001/bots')
        .then((response) => response.json())
        .then((bots) => {
          console.log(bots);  // Handle the data
        })
        .catch((error) => console.error('Error fetching data:', error))
    }

    useEffect(() => {
      fetchBot();
    }, []);
    
  
  return (
    <div >
      <Navbar />
      <BotCollection />
      <BotArmy />
      <Footer />
      <Hero />
    </div>
  );
}

export default App;
