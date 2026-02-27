# 🚀 QuickAI

QuickAI is a full-stack AI-powered web application that provides smart content generation tools like blog titles, AI responses, and more using modern web technologies.

Built with ❤️ using React, Express, and AI APIs.

ScreenShort:-
<img width="2934" height="1602" alt="image" src="https://github.com/user-attachments/assets/26e52bb3-f978-481a-abed-f0be3d4cfd88" />


---

## 📌 Features

- ✨ AI Blog Title Generator  
- 🤖 AI Content Generation  
- 🔐 Authentication System  
- 💳 Plan-based Access (Free / Premium)  
- 🌩️ Cloud Image Upload (Cloudinary)  
- 📱 Fully Responsive UI  
- ⚡ Fast & Modern UI with Vite  

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React  
- Vite  
- Tailwind CSS  
- React Router  
- Axios
- Clerk

### 🔹 Backend
- Node.js  
- Express.js  
- MongoDB  
- Cloudinary  
- Multer  
- CORS  
- dotenv  

---

## 📂 Project Structure

```bash
QuickAI/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│
├── frontend/
│   ├── src/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/bitu-kumar1269/QuickAI.git
cd QuickAI
```

### 2️⃣ Install Dependencies

#### ▶ Frontend

```bash
cd frontend
npm install
npm run dev
```

#### ▶ Backend

```bash
cd backend
npm install
npm run server
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend** folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

AI_API_KEY=your_ai_api_key
```

---

## 🚀 How It Works

1. User signs up / logs in  
2. Selects Free or Premium plan  
3. Uses AI tools (blog titles, content, etc.)  
4. Images are uploaded to Cloudinary  
5. AI API generates smart responses  

---

## 🌍 Deployment

- Frontend → Vercel   
- Backend → Render 
- Database → PostgreSQL

---

## 🤝 Contributing

Pull requests are welcome.  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the MIT License.
