import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardsBack from './components/CardsBack';
import Card from './components/Card';
import { shuffleArray } from './utilities';

function App() {
  const deckOfCardsApi = process.env.REACT_APP_DECK_OF_CARDS_API + '/deck/new/draw/?count=52';

  const [cards, setCards] = useState([]) // list of cards
  const [currIndex, setCurrIndex] = useState(0) // current index of the cards
  const [isBackVisible,  setIsBackVisible] = useState(true) // to determine if the back of the card is visible
  const [loadingMessage, setLoadingMessage] = useState('Loading...') // loading message to show when the cards are being fetched

  // Get the cards from the API
  async function getCards() {
    try {
      const { data : { cards }} = await axios.get(deckOfCardsApi)
      setCards(cards);
    } catch (error) {
      setLoadingMessage('Something went wrong. Please try again.') 
    }
  }

  // Handle the click event on the card to go to the next card
  function cardClickHandler() {
    if(currIndex === cards.length - 1) {
      setCurrIndex(0)
      return
    }
    setCurrIndex(currIndex + 1)
  }

  // Shuffle the cards
  function shuffleCardsHandler() {
    const shuffledCards = shuffleArray(cards)
    setCards(shuffledCards)
    setCurrIndex(0)
    setIsBackVisible(false)
  }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <h1>Card Shuffler</h1>
        <h2>{currIndex + 1}/{cards?.length}</h2>
      </div>
      <div className="container">
        {
          isBackVisible ? 
          <CardsBack />
          :
            cards.length > 0 ?
              <div onClick={cardClickHandler}>
                <Card card={cards[currIndex]}  />
              </div>
              : <p>{loadingMessage}</p>
        }
      </div>
      <div className='shuffle'>
        <div className='shuffle-btn' onClick={shuffleCardsHandler}>Shuffle Cards</div>
      </div>
    </div>
  );
}

export default App;
