import React, { useState, useEffect } from 'react';

const ConsoleWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  let externalWindow;

  useEffect(() => {
    // Open a new window
    externalWindow = window.open('', '', 'width=800,height=400,left=200,top=200,location=no,menubar=no,status=no,toolbar=no');
    if (!externalWindow) {
      console.error('Failed to open the new window');
      return;
    }

    // Write initial HTML structure to the new window with inline styles that resemble React Bootstrap
    externalWindow.document.write(`
      <html>
        <head>
          <title>Kafka Stream Console</title>
          <style>
            body {
              font-family: 'Lucida Console', Monaco, monospace;
              margin: 0;
              height: 100%;
              overflow: hidden;
              background-color: #212529;
              color: #f8f9fa;
            }
            #console {
              padding: 0.5rem;
              height: 100%;
              overflow-y: auto;
              white-space: pre-wrap;
              box-sizing: border-box;
            }
            .message {
              white-space: pre-wrap; /* Allow text to wrap */
              overflow-wrap: break-word; /* Breaks the word to prevent overflow */
              margin-bottom: 5px;
            }
            .timestamp {
              color: #b2b2b2; /* Slightly lighter color for the timestamp */
              margin-right: 5px; /* Space between timestamp and message */
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
      const timestamp = new Date().toISOString().replace('T', ' ').substr(0, 19); // ISO format without 'T' and milliseconds
      console.log('Received:', message);
      setMessages(prevMessages => [...prevMessages, { timestamp, message }]);

      if (externalWindow && !externalWindow.closed) {
        const consoleDiv = externalWindow.document.getElementById('console');
        const messageDiv = externalWindow.document.createElement('div');
        messageDiv.className = 'message';
        // Append timestamp and message as separate elements for styling
        const timestampSpan = externalWindow.document.createElement('span');
        timestampSpan.className = 'timestamp';
        timestampSpan.textContent = `[${timestamp}] `;
        const messageTextSpan = externalWindow.document.createElement('span');
        messageTextSpan.textContent = message;
        messageDiv.appendChild(timestampSpan);
        messageDiv.appendChild(messageTextSpan);
        consoleDiv.appendChild(messageDiv);
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
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
