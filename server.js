const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, ()=>{
    console.log("server started on port 5000")
})

//ROUTES//

//Logs
app.get("/logs", async(req, res)=>{
    try {
        const allLogs = await pool.query("SELECT * FROM logs")
        res.json(allLogs.rows)
    } catch (err) {
        console.log(err.message)
    }
})

//One Log
app.get("/logs/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const log = await pool.query("SELECT * FROM logs WHERE lid = $1", [id])
        res.json(log.rows)
    } catch (err) {
        console.log(err.message)
    }
})

//Import Logs
app.post("/import", async(req, res) => {
    try {
        const { lid } = req.body;
        const { body } = req.body;
        const { date } = req.body;
        const { time } = req.body;
        const { stravaLog } = req.body;

        const newLog = await pool.query("INSERT INTO logs (lid, body, date, time, stravaLog) VALUES($1, $2, $3, $4, $5) RETURNING *", 
        [lid, body, date, time, stravaLog])

        res.json(newLog.rows);
    } catch (err) {
        console.log(err.message);
        if (err.message ='duplicate key value violates unique constraint "logs_pkey"'){
            res.json('boop')
        }
    }
})

//Create Log
app.post("/logs", async(req, res) => {
    try {
        const { body } = req.body;
        const { date } = req.body;
        const { time } = req.body;
        const { stravaLog } = req.body;
        const { lid } = req.body;

        const newLog = await pool.query("INSERT INTO logs (body, date, time, stravaLog, lid) VALUES($1, $2, $3, $4, $5) RETURNING *", 
        [body, date, time, stravaLog, lid])
        
        res.json(newLog.rows);
    } catch (err) {
        console.log(err.message);
    }
})

//Update Log
app.put("/logs/:id", async(req, res)=>{
    try {
        const { id } = req.params;
        const { body } = req.body;
        const { date } = req.body;
        const { time } = req.body;
        const { stravaLog } = req.body;

        await pool.query("UPDATE logs SET body = $1, date = $2, time = $3, stravaLog = $4 WHERE lid = $5;", 
        [body, date, time, stravaLog, id])

        res.json("Updated")
    } catch (err) {
        console.log(err.message)
    }
})

//Delete Log
app.delete("/logs/:id", async(req, res)=>{
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM logs WHERE lid = $1", [id])
        res.json("Deleted")
    } catch (err) {
        console.log(err.message)
    }
})