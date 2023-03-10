
import React from 'react';
import { Player } from 'video-react';

export default function Play() {
  

  return (
    <Player
      playsInline
      poster="./intro.mp4"
      src="./intro.mp4"
   
    />
  );
};