import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Paper, Button, Typography, Box, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ImageUploadForm({ onImageUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      onImageUpload(selectedFile);
      setSelectedFile(null); // Reset after submitting
      setIsUploaded(true);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 2, textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <Box
          {...getRootProps()}
          sx={{
            border: '2px dashed #ccc',
            padding: 3,
            marginBottom: 2,
            cursor: 'pointer',
            height: '120px', // Fixed height for the input box
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <Typography>Drop the image here ...</Typography>
          ) : selectedFile ? (
            <div>
              <CheckCircleIcon color="primary" sx={{ fontSize: 60, marginBottom: 1 }} />
              <Typography variant="subtitle1">Image ready for upload: {selectedFile.name}</Typography>
            </div>
          ) : (
            <IconButton color="primary" size="large">
              <CloudUploadIcon sx={{ fontSize: 60 }} />
            </IconButton>
          )}
          <Typography variant="body1">
            {isUploaded ? 'Image uploaded!' : 'Drag \'n\' drop an image here, or click to select an image'}
          </Typography>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<UploadFileIcon />}
          disabled={!selectedFile || isUploaded}
          fullWidth
        >
          Upload Image
        </Button>
      </form>
    </Paper>
  );
}

export default ImageUploadForm;
