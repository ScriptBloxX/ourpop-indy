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
  const [data, setData] = useState<DataItem[]>([]);
  
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
      try {
        const url = new URL(window.location.href);
        const id = url.searchParams.get('id');

        const response = await axios.get(`https://ourpop-elysia-api.onrender.com/api/popdata/`);
        setData(response.data.data.filter((t: any) => t.id === id));
        console.log(response.data.data.filter((t: any) => t.id === id));
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
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
    <>
    {data?
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
            src={data[0].url1} 
            alt="Image 1" 
          />
        )}
        {!isImg1Visible && (
          <img className='img-2 w-full h-full object-cover' 
          src={data[0].url2}
            alt="Image 2" 
          />
        )}
        <div className={`click-label ${swing ? 'swing' : ''} bg-pink-700 px-4 rounded-sm`}>
          {clickCountLabal} Clicks
        </div>
      </div>
  : <h2>Loading... / Try refresh if u think something wonrg</h2> }
    </>
  );
}
