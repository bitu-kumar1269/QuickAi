🚀 QuickAI

QuickAI is a full-stack AI-powered web application that provides smart content generation tools like blog titles, AI responses, and more using modern web technologies.

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
🔹 Frontend

React

Vite

Tailwind CSS

React Router

Axios

🔹 Backend

Node.js

Express.js

MongoDB

Cloudinary

Multer

CORS

dotenv

📂 Project Structure
QuickAI/
│
├── backend/        # Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── ...
│
├── frontend/       # React Frontend
│   ├── src/
│   └── ...
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/quickai.git
cd quickai
2️⃣ Install Dependencies
▶ Frontend
cd frontend
npm install
npm run dev
▶ Backend
cd backend
npm install
npm run server
🔐 Environment Variables

Create a .env file inside the backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

AI_API_KEY=your_ai_api_key
🚀 How It Works

User signs up / logs in

Selects Free or Premium plan

Uses AI tools (blog titles, content, etc.)

Images are uploaded to Cloudinary

AI API generates smart responses

🌍 Deployment

You can deploy:

Frontend → Vercel / Netlify

Backend → Render / Railway

Database → MongoDB Atlas

📸 Screenshots

(Add your project screenshots here)

🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

📜 License

This project is licensed under the MIT License.
