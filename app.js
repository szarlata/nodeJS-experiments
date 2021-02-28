const express = require('express');

// express app
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    //sending html
    //res.send('<p>Express here, hello</p>');

    //sending file
    res.sendFile('./views/index.html', { root: __dirname });
    // object { root: __dirname } - we need absolute path to the file or definition of root directory
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/about-us', (req, res) => {
    res.redirect('./views/about.html', { root: __dirname });
});

// when any code above doesn't match - 404 page (it should go to very bottom of the code)
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
});