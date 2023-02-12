const express = require('express')
const app = express()
const cors = require('cors')
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json())

//ROUTES

//create user
// app.get('/', (req, res)=> {
//     console.log('Hi')
// })
app.post('/users', async (req, res) => {
    
    try {
        const { username, email } = req.body;
        console.log(username, email)
        const user = await pool.query("INSERT INTO details (username, email) VALUES($1,$2) RETURNING *", [username, email])
        res.json(user.rows[0])
    } catch (err) {
        console.log(err.message)
    }
})

//get users

app.get('/users', async(req, res) => {
    try {
        const users = await pool.query("SELECT * FROM details")
        res.json(users.rows)
        
    } catch (error) {
        console.log(error.message)
    }

})

//get user

app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM details WHERE user_id = $1", [id])
        res.json(user.rows[0])
        
    } catch (error) {
        console.error(error.message)
    }

})

//update user

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body;
        console.log(username, email)
        const user = await pool.query("UPDATE details SET username = $1, email = $2 WHERE user_id = $3", [username, email, id])
        res.json('User updated')
        
    } catch (error) {
        console.log(error.message)
    }
})

//delete user

app.delete('/users/:id', async (req, res) => {
    try {
        const { id }  = req.params
        const user = await pool.query("DELETE FROM details WHERE user_id = $1", [id])
        res.json("User deleted")
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
})