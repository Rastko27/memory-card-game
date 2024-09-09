import "../style.css";
import { useState, useEffect } from "react";

export default function Card({ dog, handleClick }) {
   // useState for setting image URL
   const [imageURL, setImageURL] = useState("");

   // useEffect to fetch image URL when component mounts
   useEffect(() => {
      const fetchImageURL = async () => {
         try {
            setImageURL(dog.URL);
         } catch (error) {
            console.error(error);
         }
      };
      // Call function to get API on component render
      fetchImageURL();
   }, []); // Empty dependency array means only render when component mounts

   return (
      <div id={dog.key} className="card" key={dog.key} onClick={() => handleClick(dog.key)}>
         <img className="card-image" src={imageURL} alt={dog.breed + " Image"} />
         <h3>{dog.breed}</h3>
      </div>
   );
}
