const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the current directory (like your HTML file)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
