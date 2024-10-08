'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [isImg1Visible, setIsImg1Visible] = useState(true);
  const [clickCountLabal, setClickCountLabal] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [swing, setSwing] = useState(false);
  const [data, setData] = useState({});
  
  useEffect(() => {
    const getPopdata = async () => {
      // try {
      //   const url = new URL(window.location.href);
      //   const id = url.searchParams.get('id');

      //   const response = await axios.post(`https://ourpop-elysia-api.onrender.com/api/popdata/getbypost`, { id: id });
      //   setData(response.data.data);
      //   console.log(response.data.data, data);
      // } catch (error) {
      //   console.error('Error fetching photos:', error);
      // }
    };

    getPopdata();
  }, []);

  const handleMouseDown = () => {
    setIsImg1Visible(false);
    updateClickCount();
    updateClickCountLabal();
  };

  const handleMouseUp = () => {
    setIsImg1Visible(true);
  };

  const updateClickCount = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount % 15 === 0) {
        postPopData(newCount);
        setClickCount(0);
      }
      return newCount;
    });
  };
  const updateClickCountLabal = () => {
    setClickCountLabal((prevCount) => {
      const newCount = prevCount + 1;
      return newCount;
    });
    setSwing(true);
    setTimeout(() => setSwing(false), 200);
  };


  const postPopData = async (popTimes:any) => {
    try {
      const url = new URL(window.location.href);
      const id = url.searchParams.get('id');

      await axios.post('https://ourpop-elysia-api.onrender.com/api/pop/pop', {
        id: id,
        poptimes: popTimes
      });
      console.log(`Posted: ${popTimes} clicks for ID: ${id}`);
    } catch (error) {
      console.error('Error posting pop data:', error);
    }
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
        {clickCountLabal} Clicks
      </div>
    </div>
  );
}
