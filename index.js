
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.get('/gen', (req, res) => {
    var name = req.query.name;
    fs.readFile(path.join(__dirname, '/presets/smallcock.txt'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file.');
        }
        res.render('codebox', { content: data.replace('{DiscordName}', name) });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});