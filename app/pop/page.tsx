'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
  id: number;
  url1: string;
  url2: string;
}

export default function Page() {
  const [isImg1Visible, setIsImg1Visible] = useState(true);
  const [clickCountLabal, setClickCountLabal] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [swing, setSwing] = useState(false);
  const [data, setData] = useState<DataItem>();

  useEffect(() => {
    const getPopdata = async () => {
      try {
        const url = new URL(window.location.href);
        const id = url.searchParams.get('id');

        const response = await axios.get(`https://ourpop-elysia-api.onrender.com/api/popdata/${id}`);
        setData(response.data.data);
        setClickCountLabal(response.data.data.total)
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    getPopdata();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (clickCount > 0) {
        postPopData(clickCount);
      }
    }, 250);
    return () => clearInterval(intervalId);
  }, [clickCount]);
  
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
    setTimeout(() => setSwing(false), 250);
  };


  const postPopData = async (popTimes: any) => {
      const url = new URL(window.location.href);
      const id = url.searchParams.get('id');

      await axios.post('https://ourpop-elysia-api.onrender.com/api/pop/', {
        id: id ? parseInt(id) : null,
        poptimes: popTimes
      }).then(()=>{
        setClickCount(0);
      }).catch((error)=>{
        console.error('Error posting pop data:', error);
      })

  };

  return (
    <>
      {data ?
        <div
          className="pop-container flex justify-center items-center h-screen w-full p-8"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          {isImg1Visible && (
            <img className='img-1 h-full object-cover'
              src={data.url1}
              alt="Image 1"
            />
          )}
          {!isImg1Visible && (
            <img className='img-2e h-full object-cover'
              src={data.url2}
              alt="Image 2"
            />
          )}
          <div className={`click-label ${swing ? 'swing' : ''} bg-pink-700 px-4 rounded-sm`}>
            {clickCountLabal} Clicks
          </div>
        </div>
        :
        <div className="loading-screen w-full h-screen fixed z-20 bg-[#fff] flex justify-center items-center flex-col">
          <img src='https://cdn.dribbble.com/users/1284666/screenshots/6321168/__3.gif'></img>
          <h2 className="text-4xl">Server is walking...</h2>
        </div>}
    </>
  );
}
