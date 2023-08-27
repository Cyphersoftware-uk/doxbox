
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

const self_url = 'https://doxbox.cc';


app.get('/public', (req, res) => {
    var name = req.url.split('?')[1];
    fs.readFile(path.join(__dirname, '/presets/smallcock.txt'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file.');
        }
        let result = data.replace('{DiscordName}', name);
        res.render('codebox', { name: name, content: result });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});