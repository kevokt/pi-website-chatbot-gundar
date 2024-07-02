const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup EJS View Engine
app.set("view engine", "ejs");
app.use(expressLayouts); 
app.use(express.static('public'));

// Routes
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
    res.render('about', {
        title: 'About GundarAI',
        layout: 'layouts/main-layout'     
    });
});

// Error Handling jika url tidak ditemukan
app.use((req, res) => {
    res.status(404);
    res.render('error', {
        title: 'Page not found',
        layout: 'layouts/main-layout'     
    });
  });

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Gundar Chatbot | Listening at http://localhost:${PORT}`);
});
