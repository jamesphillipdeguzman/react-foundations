"use client";
import { useState } from 'react';

export default function LikeButton() {
    // Add a state variable for likes count
        const [likes, setLikes] = useState(0);

  function handleClick() {
    // console.log("increment like count");
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleClick}>Likes ({likes})</button>
  );
  
}
