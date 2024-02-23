import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AudioList = () => {
  const [audioFiles, setAudioFiles] = useState([]);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const res = await axios.get('https://eksaqbackend-2.onrender.com/files');
        setAudioFiles(res.data);
      } catch (error) {
        console.error('Error fetching audio files:', error);
      }
    };

    fetchAudioFiles();
  }, []);

  const handlePlay = (filename) => {
    const audio = new Audio(`https://eksaqbackend-2.onrender.com/files/${filename}`);
    audio.play();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://eksaqbackend-2.onrender.com/files/${id}`);
      setAudioFiles(audioFiles.filter(file => file._id !== id));
    } catch (error) {
      console.error('Error deleting audio file:', error);
    }
  };

  return (
    <div className=" p-4 rounded-lg">
      <h2 className="text-xl mb-4">Recorded Audio Files</h2>
      <ul>
        {audioFiles?.map(file => (
          <li key={file._id} className="mb-2">
            <button onClick={() => handlePlay(file.filename)} className="bg-green-500 text-white rounded-lg px-4 py-2 mr-2">Play</button>
            <span>{file.filename}</span>
            <button onClick={() => handleDelete(file._id)} className="bg-green-500 text-white rounded-lg px-4 py-2 ml-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioList;
