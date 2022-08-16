import './App.css';
import React, { useState } from 'react';
import Popup  from './Popup.js';
import axios from 'axios';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();
  const [filename, setFilename] = useState('Choose File'); 

  function handleChange(event){
    setFile(event.target.files[0])
    setFilename(event.target.files[0].name); 

    console.log(filename); 
  }

  function handleSubmit(event){

    event.preventDefault()
    const formData  = new FormData(); 
    formData.append('file',file);
    const url = '/Users/suryapatil/hacktherunway/client/public/uploads'
    const config = {
      headers: {
        'Content-Type':'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data); 
    })

  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const renderGrid = () => {

    
  }

  const FileUploadPage = () => {

    
    return (
      <div className='fileUploadPage'>
        <form onSubmit={handleSubmit}>
          <input type = "file" onChange={handleChange}/>
          <button type = "submit">Upload</button>
        </form>
      </div>
    );
    
    }


  return (
    <div className="App">
     
      <h1 className = "Clips">
        Clips
        <button className="AddClip" onClick = {() => {togglePopup()}}>
          Add Clip
        </button>
        {isOpen && <Popup
      content={<>
        {FileUploadPage()}
      </>}
      handleClose={togglePopup}
    />}
 
      </h1>
      <div>
        {renderGrid()}
      </div>

      <h2 className = "Participants">
        Particpants
        <button className="AddParts">
          Add Participants
        </button>
      </h2>

      <button className = "Present">
        Present
      </button>

    </div>
    
  );
}

export default App;
