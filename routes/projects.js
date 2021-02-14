const express = require("express");
const router = express.Router();

const { projects } = require("../data.json");

router.get("/", (res, req) => {
    return res.redirect("/projects/0");
})

router.get("/:id", (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(({id}) => id === +projectId);

    if (project) {
        res.render("project", {project});
    } else {
        res.sendStatus(404);
    }
})

module.exports = router;