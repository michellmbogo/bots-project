import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import BotCollection from './Components/BotCollection';
import BotArmy from './Components/BotArmy';
import { useEffect, useState } from 'react';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  function fetchBots() {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((_bots) => {
        setBots(_bots);
      })
      .catch((error) => console.error('Error fetching data:', error))
  }

  function addToArmy(bot) {
    // Check if bot already exists in army
    const botExistsInArmy = army.some((item) => item.id === bot.id);

    if (botExistsInArmy) {
      alert('Bot already exists in army');
      return
    }

    const nextArmy = [...army, bot];
    setArmy(nextArmy);
  }

  function releaseBot(bot){
    const nextArmy = army.filter((item) => item.id !== bot.id);
    setArmy(nextArmy);
  }

  function removeFromArmy(bot) {
    // remove from botarmy
    const nextArmy = army.filter((item) => item.id !== bot.id);

    setArmy(nextArmy);

    // Remove the bot from the backend

    const url = `http://localhost:3000/bots/${bot.id}`; // Replace with the actual URL of your JSON server and endpoint

    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log(`${bot.name} deleted successfully.`);
          fetchBots();
        } else {
          console.error('Failed to delete the item');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  useEffect(() => {
    fetchBots();
  }, []);


  return (
    <div >
      <Navbar />
      <Hero />
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <BotCollection bots={bots} onClick={(_bot) => addToArmy(_bot)} />
        <BotArmy army={army} onClick={(_bot) => removeFromArmy(_bot)} releaseBot={(_bot) => releaseBot(_bot)} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
