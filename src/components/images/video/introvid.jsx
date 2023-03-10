import "node_modules/video-react/dist/video-react.css"; // import css
import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <Player
      playsInline
      poster="./intro.mp4"
      src="./intro.mp4"
   
    />
  );
};