const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

// third party middleware: Morgan
app.use(morgan('dev'));

/* Middleware
    app.use((req, res, next) => {
        console.log('new request made:');
        console.log('host: ', req.hostname);
        console.log('path: ', req.path);
        console.log('method: ', req.method);
        next();
    }); */



app.get('/', (req, res) => {
const blogs = [
    {title: "Ewa's 1st blog", snippet: "Lorem ipsum"},
    {title: "Ewa's 2nd blog", snippet: "Lorem ipsum"},
    {title: "Ewa's 3rd blog", snippet: "Lorem ipsum"}
];


    //sending html
    //res.send('<p>Express here, hello</p>');
res.render('index', { title: 'Home', blogs});
    /* //sending file
    res.sendFile('./views/index.html', { root: __dirname });
    // object { root: __dirname } - we need absolute path to the file or definition of root directory */
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// when any code above doesn't match - 404 page (it should go to very bottom of the code)
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});