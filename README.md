# eksaq
Audio Recorder and Transcription Web Application

This repository contains the code for a simple web application that allows users to record audio, upload it to the server, view previously recorded audios, and transcribe recorded audio files using an external API.
How to Run
Backend

    Clone the repository:

bash

git clone https://github.com/yourusername/audiorecorder.git

    Navigate to the backend directory:

bash

cd server

    Install dependencies:

bash

npm install

    Set up environment variables:

    Create a .env file in the root directory of the backend and define the following variables:

    env

    PORT=8080
    Replace the mongoUrl with the URL of your MongoDB database.

    Start the server:npm run start

bash

npm start

The backend server will start running on port 3001 by default.
Frontend

    Navigate to the frontend directory:

bash

cd client

    Install dependencies:

bash

npm install

    Start the frontend application:

bash

npm start

The frontend server will start running on port 3000 by default and will automatically open in your default web browser.
Design Decisions

    Frontend Framework: React was chosen as the frontend framework due to its component-based architecture, ease of use, and large community support.

    Backend Framework: Express.js was chosen as the backend framework due to its simplicity, flexibility, and robust middleware ecosystem.

    Database: MongoDB was chosen as the database for its scalability, flexibility with schema-less JSON-like documents, and ease of integration with Node.js.

    File Upload: Multer middleware was initially used for handling file uploads in the backend. However, it was later removed in favor of GridFS for storing larger audio files in MongoDB.

    Transcription: The AssemblyAI API was chosen for transcribing audio files due to its accuracy, ease of use, and comprehensive documentation.

Improvements

    Error Handling: Implement more robust error handling in both the frontend and backend to provide better feedback to users and handle edge cases more gracefully.

    Security: Enhance security measures such as input validation, authentication, and authorization to prevent common vulnerabilities like injection attacks and unauthorized access.

    Testing: Implement unit tests and integration tests for both frontend and backend components to ensure reliability and maintainability of the application.

    User Experience: Improve the user interface and experience with better design, accessibility features, and responsive layouts to cater to a wider audience.

    Optimization: Optimize the performance of the application by reducing load times, minimizing resource usage, and implementing caching strategies where applicable.

    Documentation: Provide comprehensive documentation for developers, including setup instructions, API documentation, and code comments to facilitate understanding and collaboration.