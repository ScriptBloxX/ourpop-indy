'use client';
import React, { useState } from 'react';

export default function Page() {
  const [isImg1Visible, setIsImg1Visible] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [swing, setSwing] = useState(false);

  const handleMouseDown = () => {
    setIsImg1Visible(false);
    updateClickCount();
  };

  const handleMouseUp = () => {
    setIsImg1Visible(true);
  };

  const updateClickCount = () => {
    setClickCount((prevCount) => prevCount + 1);
    setSwing(true);
    setTimeout(() => setSwing(false), 200);
  };

  return (
    <div 
      className="container flex justify-center items-center h-screen w-full p-8" 
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} 
      onTouchStart={handleMouseDown} 
      onTouchEnd={handleMouseUp} 
    >
      {isImg1Visible && (
        <img className='img-1 w-full h-full object-cover' 
          src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' 
          alt="Image 1" 
        />
      )}
      {!isImg1Visible && (
        <img className='img-2 w-full h-full object-cover' 
          src='https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg' 
          alt="Image 2" 
        />
      )}
      <div className={`click-label ${swing ? 'swing' : ''} bg-pink-700 px-4 rounded-sm`}>
        {clickCount} Clicks
      </div>
    </div>
  );
}
