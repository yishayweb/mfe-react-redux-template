const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../build')));

app.get('*', function (req, res) {
    console.log("in baseapp server");
    const pathToHtmlFile = path.resolve(__dirname, '../build/baseapp.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.listen(9000, function () {
    console.log('Application is running on http://localhost:9000');
});