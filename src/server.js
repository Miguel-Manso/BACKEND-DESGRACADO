const express = require("express");
const todosRoutes = require("./todos.routes");
const app = express();

const db = require('./models/db.js');

app.use(express.json());
app.use(todosRoutes);

app.get("/add", (req, res) => {
    return res.json("up");
});

app.listen(3333, () => console.log ("Server ta na 3333"));