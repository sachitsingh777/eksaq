import React, { useEffect, useState } from 'react';
import { AssemblyAI } from 'assemblyai';
import { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import SpeechRecognition from 'react-speech-recognition';

const SpeechText = () => {
    const [textToCopy, setTextToCopy] = useState('');
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });
    const [isLoading, setLoading] = useState(false);

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const stopListening = () => {
        SpeechRecognition.stopListening();
        setLoading(true);
    }
    useEffect(() => {
        handleTranscription()
    })
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const client = new AssemblyAI({
        apiKey: "9b9c451bea6449a7a004ddcf316306e5"
    });

    const handleTranscription = async () => {
        try {
            const config = {
                audio_url: transcript
            };
            const response = await client.transcripts.create(config);
            setTextToCopy(response.text);
        } catch (error) {
            console.error('Error transcribing audio:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!browserSupportsSpeechRecognition) {
        return <div>Speech recognition not supported</div>;
    }

   

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">Speech to Text Converter</h2>
            <br />

            <div className="main-content mt-4 p-4 border border-gray-300 rounded-md" onClick={() => setTextToCopy(transcript)}>
                {transcript}
            </div>

            <div className="flex justify-center mt-4 space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={setCopied}>
                    {isCopied ? 'Copied!' : 'Copy to clipboard'}
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={startListening}>Start Listening</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={stopListening}>
                    {isLoading ? 'Transcribing...' : 'Stop Listening'}
                </button>
            </div>
            {textToCopy && (
                <div className="mt-4">
                    <h3 className="text-lg font-bold">Transcription:</h3>
                    <p>{textToCopy}</p>
                </div>
            )}
        </div>
    );
};

export default SpeechText;
