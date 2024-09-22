const express = require("express"); // Require the Express framework
const app = express(); // Initialize Express app
const port = 8080; // Define the port number

const path = require("path"); // Require the 'path' module to handle file paths
const { v4: uuidv4 } = require('uuid'); // Require 'uuid' to generate unique IDs
const methodOverride = require("method-override"); // Require 'method-override' to allow PUT and DELETE requests in HTML forms

// Middleware configuration
{
    app.use(express.urlencoded({ extended: true })); // Middleware to parse incoming form data (URL-encoded)
    app.set("view engine", "ejs"); // Set EJS as the template engine
    app.set("views", path.join(__dirname, "view")); // Set the views directory
    app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' directory
    app.use(methodOverride("_method")); // Use method-override to allow HTTP methods like PUT and DELETE in forms
}

// Posts data stored in an array (mock database)
let posts = [
    {
        id: uuidv4(), // Unique ID for each post
        username: "hyperWorld", // Username of the person who made the post
        content: "I Love Coding...." // Content of the post
    },
    {
        id: uuidv4(),
        username: "Tushar",
        content: "Hard work is important to achieve success"
    },
    {
        id: uuidv4(),
        username: "Sonali",
        content: "I am selected for my 1st internship"
    }
];

// Route to display all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts }); // Render the 'index.ejs' template and pass the 'posts' data
});

// Route to display form to create a new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs"); // Render the 'new.ejs' template for creating a new post
});

// Route to add a new post to the array
app.post("/posts", (req, res) => {
    let { username, content } = req.body; // Extract username and content from the form data
    let id = uuidv4(); // Generate a unique ID for the new post
    posts.push({ id, username, content }); // Add the new post to the posts array
    res.redirect('/posts'); // Redirect to the list of posts
});

// Route to show a specific post by ID
app.get("/posts/:id", (req, res) => {
    let { id } = req.params; // Get the ID from the request parameters
    let post = posts.find((p) => id === p.id); // Find the post with the matching ID
    res.render("show.ejs", { post }); // Render the 'show.ejs' template and pass the post data
});

// Route to update the content of an existing post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params; // Get the ID from the request parameters
    let newContent = req.body.content; // Get the new content from the form data
    let post = posts.find((p) => id === p.id); // Find the post with the matching ID
    post.content = newContent; // Update the content of the post
    res.redirect("/posts"); // Redirect to the list of posts
});

// Route to render the edit form for a specific post
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params; // Get the ID from the request parameters
    let post = posts.find((p) => id === p.id); // Find the post with the matching ID
    res.render("edit.ejs", { post }); // Render the 'edit.ejs' template and pass the post data
});

// Route to delete a specific post by ID
app.delete('/posts/:id/delete', (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
    posts = posts.filter(p => p.id !== id); // Filter out the post with the matching ID
    res.redirect('/posts'); // Redirect to the list of posts
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Listening to port : 8080"); // Log that the server is running
});
