QuickAI

QuickAI is a full-stack AI-powered web application that provides smart content generation tools like blog titles, AI responses, and more using modern technologies.

Built with ❤️ using React, Express, and AI APIs.

📌 Features

✨ AI Blog Title Generator

🤖 AI Content Generation

🔐 Authentication System

💳 Plan-based Access (Free / Premium)

🌩️ Cloud Image Upload (Cloudinary)

📱 Fully Responsive UI

⚡ Fast & Modern UI with Vite

🛠️ Tech Stack
Frontend

React

Vite

Tailwind CSS

React Router

Axios

Backend

Node.js

Express.js

MongoDB

Cloudinary

Multer

CORS

dotenv

QuickAI/
│
├── backend/         # React Frontend
│   ├── src/
│   └── ...
│
├── frontend/         # Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── ...
│
└── README.md


Clone the Repository

git clone https://github.com/your-username/quickai.git
cd quickai

Install Dependencies

Frontend
cd client
npm install
npm run dev

Backend
cd server
npm install
npm run server
🔐 Environment Variables

Create a .env file in the server folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
AI_API_KEY=your_ai_api_key
