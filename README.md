# 📌 Angular Exercise - Task Manager

Welcome to **Angular Exercise**! This project was developed to practice Angular 17 concepts using **Standalone Components** and **Modules**.

## 🛠️ Prerequisites
Before running the project, make sure you have installed:
- **Node.js** (recommended version: 18 or higher)
- **Angular CLI** (version 17):
  ```bash
  npm install -g @angular/cli@17
  ```
- **JSON Server** (to simulate a REST API):
  ```bash
  npm install -g json-server
  ```

## 🚀 How to Run the Project

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/GabrielRogerioMessias/angular-exercise.git
```

2️⃣ **Navigate to the project folder:**
```bash
cd angular-exercise
```

3️⃣ **Install dependencies:**
```bash
npm install
```

4️⃣ **Start the Angular application:**
```bash
ng serve
```

5️⃣ **Start the JSON server (fake database):**
Open another terminal, navigate to the `src/db` folder, and run:
```bash
json-server --watch db.json
```

Now, the server will be running and ready to store your tasks! ✅

## ✨ Features
✅ List all registered tasks  
✅ Create new tasks  
✅ Use of **Snackbar** to provide user feedback  
✅ **Form validation** to ensure required fields are filled  
✅ Implementation of **Buttons, Toolbar, Inputs, Model, and Service**  

⚠ **Validation Message:** If required fields are not filled when creating a new task, a Snackbar warning will appear stating: **"Please fill in all required fields before proceeding!"**

## 📂 Project Structure
```
angular-exercise/
│── src/
│   ├── app/
│   │   ├── components/
│   │   ├── models/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── db/
│   │   ├── db.json (fake database)
│   ├── index.html
│   ├── main.ts
│── package.json
│── angular.json
│── README.md
```

## 📝 Notes
This is a simple project, mainly aimed at **learning and practicing Angular** using Standalone Components and Modules. Feel free to contribute or ask questions! 😃

---
🔗 **Created by:** [Gabriel Rogério Messias](https://github.com/GabrielRogerioMessias)

