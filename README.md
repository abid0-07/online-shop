# Demo Online Shop

This project is a demo online shop application built using Node.js, Express.js, and MongoDB. The front-end is created with HTML, CSS, and Browser-side JavaScript. The application supports two types of users: admin and customer. Admins can add, delete, and update products, while customers can view products, add them to the cart, and checkout.

---

## Table of Contents

Features
Technologies Used
Installation
Usage
Project Structure
Challenges and Solutions

---

## Features

User authentication (signup, login, logout)
Admin dashboard for managing products
Customer pages for viewing products, adding to cart, and checking out
CSRF protection
Session management
Error handling

### Customer Side

##### Product View:

![Customer Side 1](pictures\1.png)

##### product added to card

![Customer Side 2](pictures\2.png)

##### Checkout

![Customer Side 3](pictures\3.png)

### Admin Side

##### Dashboard

![Admin Side 1](pictures\4.png)

##### Product approval

## ![Admin Side 2](pictures\5.png)

## Technologies Used

Node.js: JavaScript runtime for building the server-side application.
Express.js: Web framework for Node.js to handle routing and middleware.
MongoDB: NoSQL database for storing user and product data.
EJS: Templating engine for rendering dynamic HTML pages.
bcryptjs: Library for hashing passwords.
csurf: Middleware for CSRF protection.
express-session: Middleware for managing user sessions.
connect-mongodb-session: MongoDB-backed session store for Express.

---

## Installation

Clone the repository:

Install dependencies:

Set up MongoDB:

Ensure MongoDB is running on your machine or use a cloud MongoDB service.
Update the MongoDB URI in session.js and database.js if necessary.
Start the application:

Usage
Open your browser and navigate to `http://localhost:3000`
Sign up as a new user or log in with existing credentials.
Admin users can access the admin dashboard to manage products.
Customers can browse products, add them to the cart, and proceed to checkout.

---

## Challenges and Solutions

**Challenge 1: CSRF Protection**
Problem: Implementing CSRF protection to secure forms. Solution: Used the csurf middleware to generate and validate CSRF tokens. Tokens are included in forms and validated on the server.

**Challenge 2: Session Management**
Problem: Managing user sessions and storing session data. Solution: Used express-session with connect-mongodb-session to store session data in MongoDB. Configured session settings in session.js.

**Challenge 3: Password Hashing**
Problem: Securely storing user passwords. Solution: Used bcryptjs to hash passwords before storing them in the database. Implemented password comparison during login.

**Challenge 4: Error Handling**
Problem: Handling errors gracefully and providing user feedback. Solution: Created a custom error handling middleware (error-handler.js) to catch and render error pages. Used session flash messages to provide feedback to users.

**Challenge 5: File Uploads**
Problem: Handling file uploads for product images. Solution: Used multer middleware to handle file uploads. Configured the middleware to store images in a specific directory and validate file types.

## Conclusion

This project demonstrates a full-stack web application with user authentication, product management, and secure form handling. It showcases the use of various Node.js and Express.js features, along with MongoDB for data storage. The challenges faced during development were addressed with appropriate solutions, ensuring a robust and secure application.
