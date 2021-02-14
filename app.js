const express = require("express");
const path = require("path");

// Initialize our express app
const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')))

// define routes
const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");
const projectsRoute = require("./routes/projects");

app.use(indexRoute);
app.use("/about", aboutRoute);
app.use("/projects", projectsRoute);


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
})