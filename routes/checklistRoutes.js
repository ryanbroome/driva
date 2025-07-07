const express = require("express");
const router = express.Router();
// Define the checklist items
const checklistItems = [
    {
        id: 1,
        name: "Executed operator agreement",
        completed: false,
    },
    {
        id: 2,
        name: "Equipment inspection",
        completed: false,
    },
    {
        id: 3,
        name: "AR inspection",
        completed: false,
    },
    {
        id: 4,
        name: "Staffing plan review",
        completed: false,
    },
    {
        id: 5,
        name: "Ticket / equipment review",
        completed: false,
    },
];

// GET route to retrieve all checklist items
router.get("/", (req, res, next) => {
    try {
        res.status(200).json({ checklist: checklistItems });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// POST route to create a new checklist item
router.post("/", (req, res, next) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: "Name is required" });
        }
        const newItem = {
            id: checklistItems.length + 1,
            name,
            completed: false,
        };
        checklistItems.push(newItem);
        res.status(201).json({ checklist: newItem });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
