"use strict";

/** Express app for Park Pilot. */

const express = require("express");
const cors = require("cors");

const { NotFoundError } = require("./expressError");
// const path = require("path");
// const { NotFoundError } = require("./expressError");
// const { authenticateJWT } = require("./middleware/auth");

// const usersRoutes = require("./routes/users");
// const morgan = require("morgan");
const checklistRoutes = require("./routes/checklistRoutes");
const app = express();

app.use(
    cors({
        origin: [
            // published urls
            "http://localhost:3000",
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
        credentials: true,
    })
);

app.use(express.json());
// app.use(morgan("tiny"));
// app.use(authenticateJWT);

app.use("/checklist", checklistRoutes);

/**  Handle 404 errors */
app.use(function (req, res, next) {
    return next(new NotFoundError());
});

//   Catch all generic error handler
app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;
