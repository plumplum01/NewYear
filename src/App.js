import React from 'react';
import Modal from 'react-modal';
import './App.css';
import CustomModal from './modal';
import PushBtn from './pushBtn';
import Snow from './snow';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Snow/>
      <CustomModal/>
      <PushBtn />
    </div>
  );
}

export default App;