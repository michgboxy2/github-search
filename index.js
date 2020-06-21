require('dotenv').config();
const express = require('express');
const app = require('./api/server/server');

const {PORT} = process.env || 80;

app.use(express.static(__dirname + "/build"));


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});