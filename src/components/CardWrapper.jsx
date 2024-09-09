import "../style.css";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function CardWrapper({dogs, handleCardClick}) {
   return (
      <div className="cards-wrapper">
         {dogs.map((dog) => {
            return (
               <Card
                  key={dog.key}
                  dog={dog}
                  handleClick={handleCardClick}
               />
            );
         })}
      </div>
   );
}
