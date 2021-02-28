const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')



// express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://Ewa:test123@cluster0.oincz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err))

 // register view engine
app.set('view engine', 'ejs');



//this middleware allows the browser to access files in the public folder
app.use(express.static('public'));

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

//mongose and mongo sandbox routes
/* app.get('/add-blog', (req, res) => {
 const blog = new Blog({
     title: "new blog",
     snippet: "about my new blog",
     body: "more about my new blog"
 });
 blog.save()
 .then((result) => {
     res.send(result)
 })
 .catch((err) => {
     console.log(err)
 });
});

app.get('/all-blogs', (req, res) => {
   Blog.find()
   .then((result) => {
       res.send(result);
   })
   .catch((err) => {
       console.log(err)
   }); 
});

app.get('/single-blog', (req, res) => {
    Blog.findById('603be9e1b739d4ee35695861')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})
 */
//end of block

app.get('/', (req, res) => {
 res.redirect('/blogs');
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

//blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
res.render('index', { title: 'All blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err);
    })
})

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