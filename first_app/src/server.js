const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function (req, res) {
    console.log("in firstapp server");
    const pathToHtmlFile = path.resolve(__dirname, '../build/firstapp.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.use('/', express.static(path.resolve(__dirname, '../build')));

app.listen(9001, function () {
    console.log('Application is running on http://localhost:9001');
});
