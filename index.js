const express = require('express');
const app = express();

const port = 3000

app.get('/', (req, res) => {
    res.send("If you see this the magic happened");
});

app.listen(port, () => {
    console.log(`Server is up running on port ${port}`);
});


