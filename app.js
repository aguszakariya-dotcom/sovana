const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'diagram';
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect((err, client) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Connected to MongoDB');
    // menambahkan data
    const db = client.db(dbName);

    // db.collection('spechsheet').insertOne(
    //     {
    //     nama: 'diagram 1',
    //     style: 'style 1',
    //     gambar: 'gambar 1'
    // },
    //     (err, result) => {
    //         if(err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.log(result.ops);
    //     }
    // );
// menambahkan data lebih dari 1
    // db.collection('spechsheet').insertMany(
    //     [
    //         {
    //             nama: 'diagram 2',
    //             style: 'style 2',
    //             gambar: 'gambar 2'
    //         },
    //         {
    //             nama: 'diagram 3',
    //             style: 'style 3',
    //             gambar: 'gambar 3'
    //         }
    //     ],
    //     (err, result) => {
    //         if(err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.log(result);
    //     }
    // );
    db.collection('spechsheet').find().toArray((err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
    




});






// animasi=============================================/.
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