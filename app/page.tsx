'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const photos = [
    {
      id: 0,
      src: 'https://picsum.photos/id/237/536/354',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 1,
      src: 'https://picsum.photos/seed/picsum/536/354',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/1084/536/354?grayscale',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/1060/536/354?blur=2',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 0,
      src: 'https://picsum.photos/id/237/536/354',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 1,
      src: 'https://picsum.photos/seed/picsum/536/354',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/1084/536/354?grayscale',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/1060/536/354?blur=2',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 0,
      src: 'https://picsum.photos/id/237/536/354',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 1,
      src: 'https://picsum.photos/seed/picsum/536/354',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/1084/536/354?grayscale',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/1060/536/354?blur=2',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 0,
      src: 'https://picsum.photos/id/237/536/354',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 1,
      src: 'https://picsum.photos/seed/picsum/536/354',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/1084/536/354?grayscale',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/1060/536/354?blur=2',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
      title: 'Sunset View',
      description: 'A beautiful sunset over the mountains.',
    },
  ];
  const [select, setSelect] = useState('');

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Everyone gets a pop!</h1>
        <button onClick={()=>setSelect('open-popup')} className="mb-4 text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add new friends!</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div onClick={() => window.location.href = `/pop?id=${photo}`} key={index} className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src={photo.src} alt={photo.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="text-center p-4">
                  <h2 className="text-lg font-bold">{photo.title}</h2>
                  <p>{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {select=='open-popup'?
      <div className="popup-container w-full h-screen fixed top-0 left-0 flex justify-center items-center">
        <div onClick={()=>setSelect('')} className="bg-blur bg-[#000] w-full h-screen fixed top-0 left-0 opacity-[0.7] z-[-2]"></div>
        <div className="popup bg-[#fff] w-[350px] h-[500px] z-10 shadow-[5px_5px_0px_0px_rgba(246,36,89)] rotate-12 hover:rotate-0 transition-all p-4">


          <form className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
              <input name="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input name="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input name="url1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Original Image Address URL</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input name="url2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pop Image Address URL</label>
            </div>
            <button type="submit" className="mb-4 text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Make it pop!</button>
          </form>

        </div>
      </div>
      :null}
    </div>
  );
}
