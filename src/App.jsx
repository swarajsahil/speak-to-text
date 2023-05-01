import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import "regenerator-runtime/runtime";
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App() {
  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
  }
  const startListening=()=> SpeechRecognition.startListening({continuous:true,language:'en-IN'});
  const { transcript,browserSupportsSpeechRecognition } = useSpeechRecognition();
  if(!browserSupportsSpeechRecognition){
    return null
  }
  return (
    <>
    <div className="container">{transcript}</div>
    <div className="control">
      <button className='btn' onClick={handleCopy}>Copy</button>
      <button className='btn' onClick={startListening}>Start</button>
      <button className='btn' onClick={SpeechRecognition.stopListening}>Stop</button>
    </div>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

