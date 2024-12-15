import React from 'react'
import { MdDelete } from "react-icons/md";


const Home = () => {
  const letters = [
    {
      id: 1,
      title: 'Letter1',
      body: "This is my first letter. It contains a lot of information about various topics that I wanted to share with you. Please take a moment to read through it carefully.",
      date: "Dec 15",
    },
    {
      id: 2,
      title: 'Letter2',
      body: "This is the second letter, which discusses the progress we have made so far. Let me know if you have any additional thoughts or suggestions.",
      date: "Dec 14",
    },
    {
      id: 3,
      title: 'Letter3',
      body: "Here is the third letter with details about upcoming plans and activities. Stay tuned for more updates in the future.",
      date: "Dec 13",
    },
    {
      id: 4,
      title: 'Letter4',
      body: "In this letter, I wanted to share some personal experiences and stories that I thought you might find interesting and relatable.",
      date: "Dec 12",
    },
    {
      id: 5,
      title: 'Letter5',
      body: "This letter contains some important information regarding the event happening next week. Make sure to mark your calendar.",
      date: "Dec 11",
    },
    {
      id: 6,
      title: 'Letter6',
      body: "A quick note to inform you about some changes in the schedule for next month. Please review and provide your feedback.",
      date: "Dec 10",
    },
    {
      id: 7,
      title: 'Letter7',
      body: "This is a thank-you letter to express my gratitude for all the help and support you have provided over the past year.",
      date: "Dec 09",
    },
  ];
  
  return (
    <div className='flex w-full  font-inter h-full flex-col justify-center items-center gap-10'>
    {letters.map((letter)=>{return(
      <div  key={letter.id} className="w-4/5 h-[100px] flex font-inter items-center justify-center bg-gray-100  border border-gray-300 shadow-4 rounded-md ">
      <div className='w-1/4 ml-7'>
        <h2 className='text-xl font-semibold truncate'>{letter.title}</h2>
      </div>
      <div className='w-3/4 text-md overflow-hidden'>
        <p className='truncate'>{letter.body}</p>
      </div>
      <div className='w-1/4 p-10 flex justify-around text-sm items-center'>
      <p >
       {letter.date}
      </p>
      <MdDelete  size={25}/>
      </div>
      </div>
    )})}
    
    </div>
  )
}

export default Home
