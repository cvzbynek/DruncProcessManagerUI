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

    // Write initial HTML structure to the new window with terminal-like styles
    externalWindow.document.write(`
      <html>
        <head>
          <title>Kafka Stream Console</title>
          <style>
            body { 
              font-family: 'Courier New', monospace; 
              margin: 0;
              height: 100%;
              overflow: hidden; 
            }
            #console { 
              background-color: #000; 
              color: #33FF00; 
              padding: 10px;
              height: calc(100% - 20px);
              white-space: pre-wrap;
              overflow-y: scroll;
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
          <div id="console"></div>
        </body>
      </html>
    `);
    externalWindow.document.close(); // Close the document stream

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
      // Update the content of the new window
      if (externalWindow && !externalWindow.closed) {
        const consoleDiv = externalWindow.document.getElementById('console');
        consoleDiv.textContent += `${message}\n`; // Add the new message to the console
        consoleDiv.scrollTop = consoleDiv.scrollHeight; // Auto-scroll to the latest message
      }
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
