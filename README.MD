# 💬 Talkify — Real-Time Full-Stack Chat App 🚀

## 🧠 Overview

**Talkify** is a real-time full-stack chat application developed using the **MERN stack**.  
It enables **instant one-to-one messaging**, **secure authentication**, and **image sharing**, all with a **modern and responsive UI**.

This project demonstrates my skills in **frontend, backend, and real-time communication**, built completely from scratch and connected to my own MongoDB database.

---

## ⚙️ Tech Stack

**Frontend:** React, Tailwind CSS, DaisyUI, Zustand  
**Backend:** Node.js, Express.js, MongoDB, Socket.io  
**Other Tools:** JWT, Cloudinary  

---

## ✨ Features

| Feature | Description |
|----------|-------------|
| 🔐 **Authentication** | Secure user registration & login using JWT and password hashing. |
| ⚡ **Real-Time Messaging** | Instant delivery using Socket.io for live chat. |
| 🟢 **Online Status** | Shows real-time online/offline user status. |
| 📸 **Image Uploads** | Send and store images via Cloudinary integration. |
| 🎨 **Responsive UI** | Mobile-friendly design with Tailwind & DaisyUI. |
| 💾 **Database** | Secure storage with MongoDB Atlas. |

---

## 🏗️ Project Structure

talkify/
├── 📁 backend/
│ ├── 📁 src/
│ │ ├── 📁 controllers/
│ │ ├── 📁 middleware/
│ │ ├── 📁 models/
│ │ ├── 📁 routes/
│ │ ├── 📁 lib/
│ │ └── 📄 server.js
│ └── 📄 .env.example
├── 📁 frontend/
│ ├── 📁 src/
│ │ ├── 📁 components/
│ │ ├── 📁 pages/
│ │ ├── 📁 store/
│ │ └── 📄 App.jsx
└── 📄 package.json

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm
- MongoDB Atlas account

---

### 🛠️ Installation

**1. Clone the repository**

```bash
git clone https://github.com/ArmitSoni/Talkify.git
cd Talkify
2. Install backend dependencies

bash
Copy code
cd backend
npm install
3. Install frontend dependencies

bash
Copy code
cd ../frontend
npm install
⚙️ Environment Variables
Create a .env file in the /backend folder.

Example:

ini
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:5173
▶️ Run the project
Backend:

bash
Copy code
npm run dev
Frontend:

bash
Copy code
npm run dev
Now open http://localhost:5173 to view it in your browser.

🔮 Future Enhancements
Group chat support

Message editing & deletion

Read receipts

End-to-end encryption
















