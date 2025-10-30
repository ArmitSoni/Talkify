💬 Talkify — Real-Time Full-Stack Chat App 🚀

🧠 Overview

Talkify is a real-time full-stack chat application developed by Armit Soni using the MERN stack.
It allows instant one-to-one messaging, secure authentication, and image sharing — all with a modern and responsive design.

This project shows my skills in frontend, backend, and real-time communication, built completely from scratch and connected to my own database.

⚙️ Tech Stack

Frontend: React, Tailwind CSS, DaisyUI, Zustand
Backend: Node.js, Express.js, MongoDB, Socket.io
Other Tools: JWT, Cloudinary

✨ Features
Feature	Description
🔐 Authentication	Secure user registration and login using JWT and password hashing.
⚡ Real-Time Messaging	Instant message delivery using Socket.io for live communication.
🟢 Online Status	Shows real-time online/offline status of users.
📸 Image Uploads	Users can send images using Cloudinary integration.
🎨 Responsive UI	Clean and mobile-friendly design using Tailwind CSS and DaisyUI.
💾 Database	All data stored securely in MongoDB Atlas.
🏗️ Project Structure
talkify/
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   ├── 📁 middleware/
│   │   ├── 📁 models/
│   │   ├── 📁 routes/
│   │   ├── 📁 lib/
│   │   └── 📄 server.js
│   └── 📄 .env.example
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 pages/
│   │   ├── 📁 store/
│   │   └── 📄 App.jsx
└── 📄 package.json

🚀 Getting Started
Prerequisites

Node.js (v18+)

npm

MongoDB Atlas account

Installation

Clone the repository

git clone https://github.com/ArmitSoni/Talkify.git
cd Talkify


Install backend dependencies

cd backend
npm install


Install frontend dependencies

cd ../frontend
npm install


Set up environment variables

Create a .env file in the /backend folder. Example:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:5173


Run the project

# In backend folder
npm run dev

# In frontend folder
npm run dev


Open http://localhost:5173
 to view it in your browser.

🔮 Future Enhancements

Group chat feature

Message editing & deletion

Read receipts

End-to-end encryption

👨‍💻 Author

Developed by: Armit Soni

Feel free to connect and share feedback! 😊

📜 License

This project is licensed under the MIT License.
