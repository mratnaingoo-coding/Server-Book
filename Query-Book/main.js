import connection from "./database.js";
import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    const result = await connection.query("SELECT * FROM Person");
    return res.send(result[0], 200)
})

app.get("/:id", async (req, res) => {
    const item = req.params.id
    const [result] = await connection.query("SELECT * FROM Person WHERE id = ?", [item]);
    if (result.length === 0) {
        return res.send({ msg: "Not found data!" }, 404)
    };
    return res.send(result[0], 200)
})

app.post("/", async (req, res) => {
    const lst = req.body
    const insertUser = await connection.query("INSERT INTO Person(name,gender) VALUES (?,?)",
        [lst.name, lst.gender]
    )
    return res.send({ msg: "Creating Success!" }, 201)
})

app.put("/:id", async (req, res) => {
    const lst = req.body
    const editId = req.params.id
    const editUser = await connection.query("UPDATE Person SET name = ?, gender = ? WHERE id = ?",
        [lst.name, lst.gender, editId]
    )
    return res.send({ msg: "Updating Success!" }, 301)
})

app.delete("/:id", async (req,res) =>{
    const deleteId = req.params.id
    const deleteUser = await connection.query("DELETE FROM Person WHERE id = ?",
        [deleteId]
    )
    return res.send({ msg: "Deleting Success!" }, 301)
})

app.listen(3300, () => {
    console.log("Server is running on Port:3300")
})