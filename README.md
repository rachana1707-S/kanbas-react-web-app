# Kanbas - Course Management Web App

![Kanbas Banner](assets/banner.png)

## Overview

Kanbas is a web-based course management application designed to facilitate online learning and collaboration. The platform enables instructors to manage course materials, assignments, and student interactions efficiently, while providing students with an intuitive interface to track progress, submit assignments, and engage with course content.

## Features

![Kanbas Dashboard](assets/dashboard.png)

- **User Authentication**: Role-based access control for students and faculty.
- **Course Management**: Create, update, and manage courses.
- **Assignment Handling**: Add, edit, and submit assignments with deadline tracking.
- **Module Organization**: Organize course materials into structured modules.
- **Gradebook**: View and manage student grades.
- **Real-time Updates**: Keep track of course announcements and deadlines.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, TypeScript, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux Toolkit
- **Authentication**: JSON Web Tokens (JWT)
- **Version Control**: Git/GitHub

## Screenshots

### **Sign In Page**
![Kanbas Sign In](assets/signin.png)

### **Sign Up Page**
![Kanbas Sign Up](assets/signup.png)

### **Dashboard**
![Kanbas Dashboard](assets/dashboard.png)

### **Assignments Page**
![Kanbas Assignments](assets/assignments.png)

### **Quiz Page**
![Kanbas Quiz](assets/quiz.png)

### **People Page**
![Kanbas People](assets/people.png)

## Installation

![Kanbas Installation](assets/install.png)

1. Clone the repository:
   ```bash
   git clone https://github.com/rachana_1707-S/kanbas.git
   cd kanbas
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:3000`

## API Endpoints

| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| GET    | `/api/courses`     | Fetch all courses       |
| GET    | `/api/courses/:id` | Get details of a course |
| POST   | `/api/courses`     | Create a new course     |
| PUT    | `/api/courses/:id` | Update a course         |
| DELETE | `/api/courses/:id` | Delete a course         |
| GET    | `/api/assignments` | Fetch all assignments   |
| POST   | `/api/auth/login`  | Authenticate user       |

## Contributing

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or collaborations, contact [Rachana Sudhakar](mailto:rachanasudhakar17@gmail.com).

