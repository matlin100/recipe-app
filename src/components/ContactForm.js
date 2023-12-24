import React, { useState } from 'react';
import validator from 'validator';
import { Modal, Paper, TextField, Button, Typography } from '@mui/material';

function ContactModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      alert('Invalid email address');
      return;
    }

    // Send the message (you can implement your server-side logic here)

    setEmail('');
    setMessage('');
    setIsSubmitted(true);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, margin: '0 auto', marginTop : 15 }}>
        {isSubmitted ? (
          <div>
            <Typography variant="h6">Your message has been successfully sent.</Typography>
            <Typography>We will get back to you as soon as possible.</Typography>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </form>
        )}
      </Paper>
    </Modal>
  );
}

export default ContactModal;
