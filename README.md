# 💬 RealTime Chat App

> A secure, full-stack real-time chat application with live messaging, user authentication, and responsive UI.

## Overview

This chat app was built as a hands-on project to demonstrate full-stack development skills using modern web technologies. It allows users to sign up, log in, and chat instantly with others in real time.

- **JWT Authentication** (Login/Signup)
- **Real-Time Messaging** via WebSockets
- **Node.js / Express** backend
- **MongoDB** for user and message storage
- **Socket.io** for low-latency communication
- **Responsive UI** with HTML/CSS & JavaScript

## Tech Stack

| Layer        | Technology              |
|--------------|--------------------------|
| Backend      | Node.js, Express         |
| Auth         | JWT (JSON Web Tokens)    |
| Realtime     | Socket.io                |
| Database     | MongoDB + Mongoose       |
| Frontend     | HTML, CSS, Vanilla JS    |

## Features

- User registration & login with JWT
- Real-time, multi-user chat
- Basic chatroom design with message timestamps
- Message persistence in MongoDB
- Fully responsive on desktop & mobile

## Security

- Passwords are hashed using **bcrypt**
- JWTs used for session authentication
- Input validation to prevent injection

## Goals

This project demonstrates:
- Full-stack implementation from scratch
- Real-time data handling with websockets
- Secure authentication flows
- Clean code separation and modular design

## Future Enhancements

- Private 1-on-1 messaging
- Message deletion/editing
- User presence indicators
- Chatroom history search
