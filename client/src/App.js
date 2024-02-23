import logo from './logo.svg';
import './App.css';
import AudioRecorder from './components/AudioRecorder';
import AudioList from './components/AudioList';
import { Link, Route, Routes } from 'react-router-dom';
import SpeechText from './components/SpeechText';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={ <AudioRecorder />} />
         
   
        <Route path="/speech-recognition" element={ <SpeechText />}/>
       
      </Routes>
    </div>
  </>
  );
}

export default App;
