import React, { useState } from 'react';
import TextEditor from './TextEditor';
import axios from 'axios';

const AddLetter = () => {
  const [title, setTitle] = useState('');
  const [letterContent, setLetterContent] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');  // Store the image URL
  const [fileUrl, setFileUrl] = useState('');    // Store the file URL

  const handleSubmit = async () => {
    const letterData = {
      title,
      body: letterContent, 
      time,
      date,
      imageurl: imageUrl,  
      fileurl: fileUrl,    
      userid: "userId", 
    };

    try {
      const response = await axios.post('/api/letters', letterData);
      console.log('Letter submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting letter:', error);
    }
  };

  return (
    <div className='w-4/5 mb-8 rounded-md'>
      <h2 className="text-xl font-semibold mb-4">Compose your letter</h2>
      
      <input
        type="text"
        placeholder="Enter letter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <TextEditor 
        setLetterContent={setLetterContent} 
        setImageUrl={setImageUrl} 
        setFileUrl={setFileUrl} 
      />
      
      
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Submit Letter
      </button>
    </div>
  );
};

export default AddLetter;
