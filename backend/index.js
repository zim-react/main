const https = require("https");
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "12ebe7fa-ce2f-4397-b333-13a9d8a5aee5 "}}
    );
    return res.status(r.status).json(r.data)
    } catch (e) {
    return res.status(e.response.status).json(e.response.data);
    }
});

app.get('/', (req,res)=>{
  res.send("Hello from express server.")
});

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
    )
  .listen(3001);