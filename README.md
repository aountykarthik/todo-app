# TODO App

A simple and clean TODO application built with React.

## Features
- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Task completion counter

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<username>/todo-app.git
cd todo-app

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`.

## Deployment to GitHub Pages

### Step 1: Update `package.json`
Replace `<username>` in the `homepage` field with your GitHub username:
```json
"homepage": "https://<username>.github.io/todo-app"
```

### Step 2: Initialize Git & Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/todo-app.git
git push -u origin master
```

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: Access Your App
Visit: `https://<username>.github.io/todo-app`

## Project Structure

```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoForm.js       # Input form to add todos
│   │   ├── TodoForm.css
│   │   ├── TodoList.js       # Renders the list of todos
│   │   ├── TodoList.css
│   │   ├── TodoItem.js       # Individual todo item
│   │   └── TodoItem.css
│   ├── App.js                # Root component with state
│   ├── App.css
│   ├── index.js              # Entry point
│   └── index.css
└── package.json
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm run deploy` | Deploys to GitHub Pages |
| `npm test` | Runs tests |
