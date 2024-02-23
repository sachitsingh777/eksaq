import React, { useState } from 'react';
import axios from 'axios';
import { useReactMediaRecorder } from 'react-media-recorder';
import AudioList from './AudioList';

const AudioRecorder = () => {
    const {
        status,
        startRecording,
        pauseRecording,
        resumeRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ audio: true });

    const handleStartStop = () => {
        if (status === 'idle' || status === 'stopped') {
            startRecording();
        } else if (status === 'recording') {
            pauseRecording();
        } else if (status === 'paused') {
            resumeRecording();
        }
    };

    const handleStop = () => {
        stopRecording();
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('audio', mediaBlobUrl);

            const res = await axios.post('https://eksaqbackend-2.onrender.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Uploaded successfully:', res.data);
        } catch (error) {
            console.error('Error uploading audio:', error);
        }
    };

    return (
        <div className=" p-4 rounded-lg">
            <p className="text-center text-xl mb-4">Status: {status}</p>
            <div className="flex justify-center">
                {mediaBlobUrl && <audio controls src={mediaBlobUrl} className="mt-4" />}
            </div>
            <div className="flex justify-center items-center mt-4">
                {status === 'idle' || status === 'stopped' ? (
                    <button onClick={handleStartStop} className="bg-green-500 text-white rounded-lg px-4 py-2">
                        Start
                    </button>
                ) : status === 'recording' ? (
                    <>
                        <button onClick={handleStartStop} className="bg-green-500 text-white rounded-lg px-4 py-2 mr-2">
                            Pause
                        </button>
                        <button onClick={handleStop} className="bg-green-500 text-white rounded-lg px-4 py-2">
                            Stop
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={handleStartStop} className="bg-green-500 text-white rounded-lg px-4 py-2 mr-2">
                            Resume
                        </button>
                        <button onClick={handleStop} className="bg-green-500 text-white rounded-lg px-4 py-2">
                            Stop
                        </button>
                    </>
                )}
                {mediaBlobUrl && (
                    <button onClick={handleUpload} className="bg-green-500 text-white rounded-lg px-4 py-2 ml-2">
                        Upload
                    </button>
                )}
            </div>
            <AudioList />
        </div>
    );
};

export default AudioRecorder;
