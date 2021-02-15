const express = require("express");
const router = express.Router();

const { projects } = require("../data.json");

router.get("/", (req, res) => {
    return res.redirect("/projects/0");
})

router.get("/:id", (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find(({id}) => id === +projectId);

    if (project) {
        res.render("project", {project});
    } else {
        const err = new Error();
        err.statusCode = 404;
        err.message = `Looks like the project you requested does't exists`;
        console.log(err.message);
        next(err);
    }
})

module.exports = router;