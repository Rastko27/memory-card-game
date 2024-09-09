import "../style.css";

export default function Score({ score, highScore, win }) {
   return(
      <>
         <h2 className="score">{win ? ("You won! Press any card to restart.") : "Score: " + score }</h2>
         <h2 className="score">High Score: {highScore}</h2>
      </>
   )
}