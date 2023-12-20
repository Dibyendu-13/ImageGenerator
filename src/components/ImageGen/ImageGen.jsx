// 
import React, { useState } from 'react';
import './ImageGenerator.css'; // Import the CSS file for styling
import './LoadingFile.css'
import Api from './api';

const ImageGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const generateImage = () => {
    setLoading(true);

    fetch("https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization":`Bearer ${Api}`
      },
      body: JSON.stringify({ inputs: userInput }),
    })
      .then((res) => res.blob())
      .then((blob) => {
        setLoading(false);
        setGeneratedImage(window.URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.error('Error generating image:', error);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage();
  };

  return (
    /*
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Input Text:
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>

        <button  type="submit" disabled={loading}>
          Generate Image
        </button>
      </form>
      {loading && <p>Generating image...</p>}
      {generatedImage && (
        <div className="image-container">
          <img src={generatedImage} alt="Generated Image" className="generated-image" />
        </div>
      )}
    </div> */

    
     

  <div>
    
     <form className='container' onSubmit={handleSubmit}>
     <br/>
    <h1 style={{textAlign:'center'}}> AI Image Generator</h1>
    <br/>
  <div id='inputBox' style={{display:'flex',justifyContent:'center'}} class="form-group">
    
    <input value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" class="form-control"  placeholder="Search Here "/>
    &nbsp;&nbsp;
    <button  type="submit" disabled={loading} class="btn btn-primary"> Generate Image</button>
    
  </div>
  
</form>

  <br/>

  <div style={{display:'flex',justifyContent:'center'}}>
  {loading ?<div class="ring">Loading
  <span></span>
</div>:

  generatedImage && (
    <div id="imgContainer" className="image-container" style={{margin:"10px"}}  >
      <img style={{border: '5px solid #555',borderRadius: '25px'}} src={generatedImage} alt="Generated Image" className="generated-image" />
    </div>
  )}

  </div>
  
  </div>
  
    
  );
};

export default ImageGenerator;
