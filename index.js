console.clear();

const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'html', 'web.html'));
});

app.use(express.static('static'));

app.listen(port, () => {
    console.log(`Listening To Dashboard On Port: ${port}`);
});