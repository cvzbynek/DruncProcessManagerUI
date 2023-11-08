import React, { useState, useEffect } from 'react';

const ConsoleWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  let externalWindow;

  useEffect(() => {
    // Open a new window
    externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
    if (!externalWindow) {
      console.error('Failed to open the new window');
      return;
    }

    // Write directly to the new window to test
    externalWindow.document.write('<h1>Kafka Stream Console</h1>');

    // Check if the external window is still open before trying to access it
    const checkExternalWindow = () => {
      if (!externalWindow || externalWindow.closed) {
        clearInterval(intervalId);
        onClose(); // Notify the parent component
      }
    };

    // Set an interval to check if the window is still open
    const intervalId = setInterval(checkExternalWindow, 1000);

    // Cleanup function to close the window and clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      if (externalWindow) {
        externalWindow.close();
      }
    };
  }, []); // Empty dependencies array to ensure this effect only runs once

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001');

    ws.onmessage = (event) => {
      const message = event.data;
      console.log('Received:', message);
      setMessages(prevMessages => [...prevMessages, message]);
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    return () => {
      ws.close();
    };
  }, []); // This effect also should only run once

  // No return statement is necessary because we are not rendering anything in the React tree
};

export default ConsoleWindow;
