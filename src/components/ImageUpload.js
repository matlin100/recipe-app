import React, { useState } from 'react';
import './styles/ImageUpload.css'; // Ensure you have the right path to the CSS file

function ImageUploadForm({ onImageUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      onImageUpload(selectedFile);
    }
  };

  return (
    <div className="image-upload-form">
      <form onSubmit={handleSubmit} className="recipe-form">
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="form-input"
        />
        <button type="submit" className="submit-button">Upload Image</button>
      </form>
    </div>
  );
}

export default ImageUploadForm;
