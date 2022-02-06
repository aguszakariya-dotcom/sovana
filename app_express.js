const chalkAnimation = require('chalk-animation');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 8000;
 
const rainbow = chalkAnimation.rainbow('Server is running on port 8000');
setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);
 
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);

// ====================================>>>>
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
})

// app.get('/diagram', (req, res) => {
//     res.send(__dirname + './data/diagram.json');

// })
// ====================================>>>> halaman mesti di bawah!
app.use('/', (req, res) => {
    res.status(404).send('404 File Not Found');
    res.send('404 Page');
})

// golongan bawah
app.listen(port, () => {
    console.log('');
});