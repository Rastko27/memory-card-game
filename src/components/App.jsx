import "../style.css";
import { useState, useEffect } from "react";
import CardWrapper from "./CardWrapper";
import Dogs from "../dogList";
import Score from "./Score";

export default function App() {
   const [clickedCards, setClickedCards] = useState([]);
   const [dogs, setDogs] = useState(Dogs);
   const [score, setScore] = useState(0);
   const [highScore, setHighScore] = useState(0);
   const [win, setWin] = useState(false);

   function shuffleArray(array) {
      // Create a copy of the array to avoid mutating the original
      let arrayCopy = [...array];
      for (let i = arrayCopy.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
      }
      return arrayCopy;
   }

   const handleCardClick = (cardKey) => {
      if (!clickedCards.includes(cardKey)) {
         setClickedCards((prev) => [...prev, cardKey]);
         setScore(score + 1);
         if (score === 12) {
            setWin(true);
         }
      } else {
         if (highScore < score) {
            setHighScore(score);
         }
         setScore(0);
         setClickedCards([]);
      }

      setDogs((prevDogs) => shuffleArray([...prevDogs]));
   };

   return (
      <div className="container">
         <div className="app-wrapper">
            <div className="heading-wrapper">
               <h1>Memory Card Game</h1>
               <div className="subheading">Can you memorize all dogs?</div>
               <h2>
                  Click on images to get points. But, don&apos;t click on the
                  same image more than once!
               </h2>
            </div>
            <Score score={score} highScore={highScore} win={win} />
            <CardWrapper dogs={dogs} handleCardClick={handleCardClick} />
         </div>
      </div>
   );
}
