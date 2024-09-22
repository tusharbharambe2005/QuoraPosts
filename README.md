...............................................................................
...................................Quora Posts..................................
@description :->
    This project is a simple Quora-like application built with Node.js and Express. Users can view, create, edit, and delete posts. The project uses in-memory data storage to manage posts and EJS as the templating engine for rendering views. It mimics basic CRUD operations seen in typical question-answer platforms like Quora.
@Installation:->
1.Clone the repository
    git clone <repository-url>
    cd <project-folder>

2.Install dependencies
    npm i 

@Usage:->
1.Run the server
    npm start
The server will run on port 8080 by default.

2. Accessing the application Open a web browser and go to http://localhost:8080
   to view the application.

@Features:->
>>  View all posts: /posts - Displays all posts stored in memory.
>>  Create new post: /posts/new - Allows users to create a new post.
>>  View specific post: /posts/:id - Shows details of a specific post identified by :id.
>>  Edit post: /posts/:id/edit - Allows editing of an existing post.
>>  Delete post: /posts/:id/delete - Deletes a specific post.

@Dependencies:->
>>  express: Web framework for Node.js
>>  ejs: Template engine for rendering views
>>  uuid: Generates unique identifiers
>>  method-override: Allows HTTP methods like PUT or DELETE in places where the client doesn't support it

@File Structure:->
project-folder/
│
├── node_modules/          # Dependencies installed by npm
├── public/                # Static assets like CSS, images
├── views/                 # EJS view templates
├── app.js                 # Main application file
└── README.md              # This file

@Notes
>>  Middleware: Uses express.urlencoded for form data and method-override to support PUT and DELETE HTTP methods.
>>  Data Storage: Posts are stored in memory (posts array) for demonstration purposes.

@Contributing
>>  If you'd like to contribute to this project, feel free to fork it and submit a pull request with your changes.