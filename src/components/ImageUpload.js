import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/ImageUpload.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ImageUploadForm({ onImageUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileDropped, setIsFileDropped] = useState(false); // State to track if file is dropped

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    setIsFileDropped(true); // Set to true when file is dropped
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      onImageUpload(selectedFile);
      setIsFileDropped(false); // Reset after submitting
    }
  };

  return (
    <div className="image-upload-form recipe-form">
      <form onSubmit={handleSubmit}>
        <div {...getRootProps()} className={`dropzone ${isFileDropped ? 'file-dropped' : ''}`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the image here ...</p>
          ) : isFileDropped ? (
            <p>Image ready for upload: {selectedFile.name}</p>
          ) : (
            <div className="upload-icon">
              <CloudUploadIcon style={{ fontSize: 60 }} />
              <p>Drag 'n' drop an image here, or click to select an image</p>
            </div>
          )}
        </div>
        <button type="submit" className="submit-button" disabled={!selectedFile}>
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default ImageUploadForm;
