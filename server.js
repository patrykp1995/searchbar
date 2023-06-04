const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const appPath = path.join(__dirname, 'app');
app.use(express.static(appPath));

app.get('/*', (req, res) => {
    res.sendFile(path.join(appPath, 'public', 'index.html'));
});

app.post('/data', (req, res) => {
    const filePath = path.join('data', 'products.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(data);
        }
    });
});


app.listen(port, () => {
    console.log(`Serwer Node.js działa na porcie ${port}`);
});
