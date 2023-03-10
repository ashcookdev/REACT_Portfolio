
import React from 'react';
import { Player, autoPlay } from 'video-react';

export default props => {
  return (
    <Player
      playsInline
      poster="./intro.mp4"
      src="./intro.mp4"
   autoPlay
    />
  );
};