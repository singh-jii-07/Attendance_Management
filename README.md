# 📘 Attendance Management System (MERN Stack)

## 🚀 Project Overview

The **Attendance Management System** is a full-stack web application designed to manage student attendance efficiently. It supports three types of users: **Admin, Teacher, and Student**, each with specific roles and permissions.

This system helps automate attendance tracking, reduce manual errors, and provide real-time insights into student attendance.

---

## 👥 User Roles & Responsibilities

### 🔑 Admin

* Register Teachers (based on subject)
* Register Students (based on class)
* Manage users (update/delete)
* Assign subjects and classes

### 👨‍🏫 Teacher

* Login securely
* View assigned students (based on subject/class)
* Mark attendance (Present/Absent)
* Update attendance records

### 👨‍🎓 Student

* Login securely
* View personal attendance
* Check subject-wise attendance
* View attendance percentage

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Axios
* Tailwind CSS / CSS

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (Mongoose)

### Authentication:

* JWT (JSON Web Token)

---

## 📁 Project Structure

```
attendance-management-system/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.js
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── index.js
```

---

## 🗃️ Database Schema

### 👤 Admin Schema

```
name: String
email: String
password: String
role: (Admin)
```

### 👨‍🏫 Teacher Schema

```
userId
password
subject
assignedClasses
```

### 👨‍🎓 Student Schema

```
userId
password
class
rollNumber
```

### 📅 Attendance Schema

```
studentId
teacherId
subject
date
status (Present / Absent)
```

---

## 🔐 Authentication Flow

* User logs in with email & password
* Server verifies credentials
* JWT token is generated
* Token is used for protected routes

---

## ⚙️ Core Functionalities

### ✅ Admin Panel

* Add/Edit/Delete Teachers & Students
* Assign subjects to teachers
* Assign students to classes

### ✅ Teacher Panel

* Select class & subject
* Mark attendance for students
* Prevent duplicate attendance for same date

### ✅ Student Panel

* View attendance history
* Check attendance percentage
* Subject-wise breakdown

---

## 🚫 Important Constraints

* A student can have **only one attendance record per subject per day**
* Only assigned teachers can mark attendance
* Role-based access control must be implemented

---

## 📊 Future Enhancements

* Dashboard with charts (attendance analytics)
* Export attendance to PDF/Excel
* Email/SMS alerts for low attendance
* Mobile responsive UI
* Biometric or QR-based attendance

---

## 🧠 Key Learnings

* Role-based authentication & authorization
* REST API design
* Database schema design
* Full-stack integration (MERN)

---

## 🧪 How to Run the Project

### 1️⃣ Clone Repository

```
git clone <repo-url>
cd attendance-management-system
```

### 2️⃣ Backend Setup

```
cd backend
npm install
npm start
```

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 📌 Conclusion

This project demonstrates a real-world implementation of a role-based system using the MERN stack. It is highly useful for academic institutions and serves as a strong portfolio project for full-stack development roles.

---

## ✍️ Author

**Nilesh Kumar**

---
