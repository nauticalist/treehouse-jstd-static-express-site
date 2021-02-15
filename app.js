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

// add routes to the application context
app.use(indexRoute);
app.use("/about", aboutRoute);
app.use("/projects", projectsRoute);

// Not Found Error Handler
app.use((req, res, next) => {
    const err = new Error();
    err.statusCode = 404;
    err.message = `Looks like the page you requested does't exists`;
    console.log(err.message);
    res.status(404).render("page-not-found",{ err });
});

// Global error handler
// Used: https://codepen.io/juliepark/pen/erOoeZ
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).render("page-not-found", { err });
    } else {
        err.message = err.message || `Oops! Something went wrong. :(`;
        res.status(err.status || 500).render("error", { err });
    }
});

// Log server started successfully and listening port 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
})