Quora Posts 📝
A simple Quora-like application built with Node.js and Express. This project demonstrates basic CRUD operations, allowing users to create, view, edit, and delete posts. With an in-memory data storage system, it provides a straightforward experience for learning and practicing web development fundamentals.

📋 Description
This application is a basic question-answer platform where users can:
View all posts
Create new posts
View individual posts
Edit existing posts
Delete posts
The project is built with Node.js and Express and uses EJS for rendering views.

🚀 Installation
To run this project locally:

Clone the Repository:
git clone <repository-url>
cd <project-folder>

Install Dependencies:
npm install
🔧 Usage

Start the Server:
npm start

By default, the server will start on http://localhost:8080.

Access the Application: Open a browser and navigate to http://localhost:8080.

✨ Features
View All Posts: /posts - Displays all posts.
Create New Post: /posts/new - Allows users to create a new post.
View Specific Post: /posts/:id - Shows the details of a specific post identified by :id.
Edit Post: /posts/:id/edit - Allows editing of an existing post.
Delete Post: /posts/:id/delete - Deletes a specific post.

📦 Dependencies
express: Web framework for Node.js.
ejs: Templating engine for rendering views.
uuid: Generates unique identifiers for posts.
method-override: Enables PUT and DELETE HTTP methods.

📂 File Structure
project-folder/
│
├── node_modules/          # Dependencies installed by npm
├── public/                # Static assets (e.g., CSS, images)
├── views/                 # EJS templates for rendering views
├── app.js                 # Main application file
└── README.md              # Project documentation

📝 Notes
Middleware: Uses express.urlencoded for form data and method-override to support PUT and DELETE methods.
Data Storage: In-memory storage (an array of posts) is used to simplify the demonstration.

🤝 Contributing
If you'd like to contribute, feel free to fork the repository, make your changes, and submit a pull request.
