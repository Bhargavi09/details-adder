const express = require('express')
const app = express()
const cors = require('cors')
const pool = require("./db")
const { app: { port } } = require('./config/config')

//middleware
app.use(cors())
app.use(express.json())

console.log()

//ROUTES

//create user
// app.get('/', (req, res)=> {
//     console.log('Hi')
// })
app.post('/users', async (req, res) => {
    
    try {
        const { username, email, experience } = req.body;
        console.log(username, email, experience)
        const user = await pool.query("INSERT INTO details (username, email, experience) VALUES($1,$2, $3) RETURNING *", [username, email, experience])
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

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})