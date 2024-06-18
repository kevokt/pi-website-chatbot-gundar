const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// Setup EJS View Engine
app.set("view engine", "ejs");
app.use(expressLayouts); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'GundarAI',
        layout: 'layouts/main-layout'
    });
});

app.get('/chat', (req, res) => {
    res.render('chat', {
        title: 'GundarAI Chatbot',
        layout: 'layouts/main-layout'
    });
});

app.get('/links', (req, res) => {
    res.render('links', {
        title: 'UG Links',
        layout: 'layouts/main-layout'     
    });
});

app.get('/about', (req, res) => {
    res.render('About', {
        title: 'About GundarAI',
        layout: 'layouts/main-layout'     
    });
});

app.use((req, res) => {
    res.status(404);
    res.render('error', {
        title: 'Page not found',
        layout: 'layouts/main-layout'     
    });
  });

app.listen(port, () => {
    console.log(`Gundar Chatbot | Listening at http://localhost:${port}`);
});