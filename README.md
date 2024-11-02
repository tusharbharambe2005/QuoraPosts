
<html lang="en">
<body>

  <h1>Quora Posts 📝</h1>
  <p>A simple <strong>Quora-like application</strong> built with <strong>Node.js</strong> and <strong>Express</strong>. This project demonstrates basic CRUD operations, allowing users to create, view, edit, and delete posts. With an in-memory data storage system, it provides a straightforward experience for learning and practicing web development fundamentals.</p>
  
  <hr>

  <h2>📋 Description</h2>
  <p>This application is a basic question-answer platform where users can:</p>
  <ul>
    <li>View all posts</li>
    <li>Create new posts</li>
    <li>View individual posts</li>
    <li>Edit existing posts</li>
    <li>Delete posts</li>
  </ul>
  <p>The project is built with <strong>Node.js</strong> and <strong>Express</strong> and uses <strong>EJS</strong> for rendering views.</p>
  
  <hr>

  <h2>🚀 Installation</h2>
  <p>To run this project locally:</p>
  <ol>
    <li><strong>Clone the Repository</strong>:</li>
    <pre><code>git clone &lt;repository-url&gt;
cd &lt;project-folder&gt;</code></pre>
    <li><strong>Install Dependencies</strong>:</li>
    <pre><code>npm install</code></pre>
  </ol>
  
  <hr>

  <h2>🔧 Usage</h2>
  <ol>
    <li><strong>Start the Server</strong>:</li>
    <pre><code>npm start</code></pre>
    <p>By default, the server will start on <a href="http://localhost:8080">http://localhost:8080</a>.</p>
    <li><strong>Access the Application</strong>:</li>
    <p>Open a browser and navigate to <a href="http://localhost:8080">http://localhost:8080</a>.</p>
  </ol>
  
  <hr>

  <h2>✨ Features</h2>
  <ul>
    <li><strong>View All Posts</strong>: <code>/posts</code> - Displays all posts.</li>
    <li><strong>Create New Post</strong>: <code>/posts/new</code> - Allows users to create a new post.</li>
    <li><strong>View Specific Post</strong>: <code>/posts/:id</code> - Shows the details of a specific post identified by <code>:id</code>.</li>
    <li><strong>Edit Post</strong>: <code>/posts/:id/edit</code> - Allows editing of an existing post.</li>
    <li><strong>Delete Post</strong>: <code>/posts/:id/delete</code> - Deletes a specific post.</li>
  </ul>
  
  <hr>

  <h2>📦 Dependencies</h2>
  <ul>
    <li><strong>express</strong>: Web framework for Node.js.</li>
    <li><strong>ejs</strong>: Templating engine for rendering views.</li>
    <li><strong>uuid</strong>: Generates unique identifiers for posts.</li>
    <li><strong>method-override</strong>: Enables PUT and DELETE HTTP methods.</li>
  </ul>
  
  <hr>

  <h2>📂 File Structure</h2>
  <pre><code>project-folder/
│
├── node_modules/          # Dependencies installed by npm
├── public/                # Static assets (e.g., CSS, images)
├── views/                 # EJS templates for rendering views
├── app.js                 # Main application file
└── README.md              # Project documentation
</code></pre>
  
  <hr>

  <h2>📝 Notes</h2>
  <ul>
    <li><strong>Middleware</strong>: Uses <code>express.urlencoded</code> for form data and <code>method-override</code> to support PUT and DELETE methods.</li>
    <li><strong>Data Storage</strong>: In-memory storage (an array of posts) is used to simplify the demonstration.</li>
  </ul>
  
  <hr>

  <h2>🤝 Contributing</h2>
  <p>If you'd like to contribute, feel free to fork the repository, make your changes, and submit a pull request.</p>

</body>
</html>
