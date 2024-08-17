// server.js
const express = require('express');
const app = express();

app.use(express.static('your-project-folder'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});