# 🚀 User Management System

<p align="center">
  <img src="./Preview Image.png" alt="Preview Image" width="700"/>
</p>

A full-stack **User Management System** built using the **MERN Stack (MongoDB, Express, React, Node.js)** as part of an assignment for Bits and Volts Pvt. Ltd.

---

## 🔗 Live Demo

👉 https://frontend-02-two.vercel.app/users

---

## 📦 GitHub Repository

👉 https://github.com/rockyhans/user_management_task

---

# 📌 Project Overview

This project includes:

* CRUD operations with pagination
* Search functionality
* Export data to CSV
* Responsive UI (Mobile + Desktop)
* Proper validation (Frontend + Backend)
* Clean and scalable architecture

---

# 🧱 Tech Stack

## 🔹 Frontend

* React (Vite)
* React Router DOM
* Axios
* React Hook Form
* React Hot Toast
* Tailwind CSS (v3)
* Lucide Icons

## 🔹 Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Express Validator
* JSON2CSV

## 🔹 Deployment

* Frontend: Vercel
* Backend: Render / Local

---

# 🏗️ Project Structure

## 📁 Frontend

```
src/
├── components/
├── pages/
├── services/
├── routes/
├── hooks/
├── utils/
├── App.jsx
├── main.jsx
```

---

## 📁 Backend

```
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
├── server.js
```

---

# 🔌 API Endpoints

## Base URL

```
/api/users
```

### 📌 Get Users (Pagination + Search)

```
GET /api/users?page=1&limit=10&search=keyword
```

---

### 📌 Create User

```
POST /api/users
```

---

### 📌 Update User

```
PUT /api/users/:id
```

---

### 📌 Delete User

```
DELETE /api/users/:id
```

---

### 📌 Export CSV

```
GET /api/users/export
```

---

# 🎨 Frontend Routes

```
/users        → User List
/add          → Add User
/edit/:id     → Edit User
/view/:id     → View Details
```

---

# ✨ Features

✔ CRUD Operations
✔ Pagination
✔ Search Functionality
✔ CSV Export
✔ Form Validation
✔ Responsive Design
✔ Clean Component Structure
✔ Error Handling (Toast Notifications)

---

# 📱 Responsive Design

* Built using Tailwind CSS
* Mobile-first approach
* Works across all screen sizes

---

# ⚙️ Setup & Run Locally

## 🔽 1. Clone Repository

```bash
git clone https://github.com/rockyhans/user_management_task.git
cd user_management_task
```

---

## ⚙️ 2. Backend Setup

```bash
cd backend
npm install
```

### 📄 Create `.env` file

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-management
NODE_ENV=development
```

### ▶️ Run Backend

```bash
npm start
```

---

## 🎨 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

👉 Open: http://localhost:5173

---

# 🚀 Deployment Notes

## Vercel Fix (React Router 404 Issue)

Create `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

# 🧠 Design Decisions

| Feature    | Approach     | Reason                   |
| ---------- | ------------ | ------------------------ |
| Pagination | Backend      | Efficient for large data |
| Validation | FE + BE      | Data integrity           |
| CSV Export | Backend      | Better performance       |
| Routing    | React Router | SPA experience           |
| Styling    | Tailwind     | Clean UI                 |

---

# 🚫 Best Practices Followed

✔ No inline styles
✔ Proper componentization
✔ Clean naming conventions
✔ Structured folders

---

# 🔮 Future Improvements

* Authentication (JWT)
* Role-based access
* Image upload
* Advanced filtering
* Testing (Unit + Integration)

---

# 🙌 Conclusion

This project demonstrates:

* Strong MERN stack fundamentals
* Clean architecture and scalable design
* Real-world problem solving (deployment, routing, validation)
* Focus on performance and UX

---

## 👤 Author

**Danish Rizwan**
Full Stack Developer

---

✨ *Thank you for reviewing this project!*
