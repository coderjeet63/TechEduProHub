# TechEduProHub

A full-stack MERN platform designed for secure course purchasing and professional learning. Users can explore services or courses offered by the company, add them to cart, and proceed to secure checkout.

---

### 🎨 Tech Stack & Tools

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

## 📚 Table of Contents
* [Features](#-features)
* [API Structure](#-api-structure-and-flow)
* [Application Flow](#-application-flow)
* [Getting Started](#-getting-started)
* [License](#-license)

---

## ✨ Features

* **🔑 User Authentication:** Secure registration and login using JWT.
* **📚 Service & Course Catalog:** Users can view all available services/courses offered by the company.
* **🛒 Cart & Checkout:** Add services to the cart and complete the checkout process.
* **✉️ Contact Support:** Users can send inquiries directly through the contact form.
* **📱 Responsive UI:** Built with React and Tailwind CSS for seamless experience across devices.

---

## ⚙️ API Structure and Flow

### API Base URL
(http://localhost:5000)


### Routes Overview

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/auth/register` | `POST` | Handles new user registration. |
| `/api/auth/login` | `POST` | Handles user login and issues an **Access Token** and **Refresh Token**. |
| `/api/auth/refresh` | `POST` | Generates a new access token using the refresh token. |
| `/api/auth/logout` | `POST` | Logs out user and invalidates both tokens. |
| `/api/contact` | `POST` | Saves a user inquiry from the contact form. |
| `/api/cart` | `GET` | Fetches the current user's cart. |
| `/api/cart/save` | `POST` | Adds a service to the user's cart. |


---

## 🔄 Application Flow

### 1. User Authentication Flow
1.  User signs up or logs in via `/api/auth/register` or `/api/auth/login`.
2.  JWT token is generated and stored in the frontend (e.g., in AuthContext).
3.  This token is attached to the headers of all secure API requests.

### 2. Service & Cart Flow
1.  Frontend fetches available services from the `/api/services` endpoint.
2.  User adds a service to the cart, triggering a `POST` request to `/api/cart/add`.
3.  The cart component fetches cart items from `/api/cart` to display a summary and checkout option.

### 3. Contact Flow
1.  User submits a contact form.
2.  A `POST` request is sent to `/api/contact`.
3.  The data is stored in the MongoDB database for admin review.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
* [Node.js (v18+ recommended)](https://nodejs.org/)
* [MongoDB (Local or Atlas)](https://www.mongodb.com/)

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/coderjeet63/TechEduProHub.git](https://github.com/coderjeet63/TechEduProHub.git)
    cd TechEduProHub
    ```

2.  **Install Server Dependencies:**
    (Server folder mein jaayein)
    ```bash
    cd backend
    npm install
    ```

3.  **Install Client Dependencies:**
    (Client folder mein jaayein, naye terminal mein ya `cd ../client`)
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Create Environment Variables:**
    `server` folder ke andar ek `.env` file banayein:
    ```.env
    MONGODB_URI=your_mongo_connection_string
    PORT=8080
    JWT_SECRET=your_secret_key_jo_bahut_strong_ho
    ```

5.  **Run the Application:**
    * **Run Server:** (`server` folder mein)
        ```bash
        npm run dev
        ```
    * **Run Client:** (`client` folder mein)
        ```bash
        npm run dev
        ```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
