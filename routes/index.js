const express = require("express");

const router = express.Router();

module.exports = () => {
    router.get("/", (req, res, next)=> {
        res.send("Du Lernst");
    });
    return router;
};