const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('<hi>Hello There.</hi>');
});

app.listen(5000, () => {
    console.log('App listening on port 5000!')
})