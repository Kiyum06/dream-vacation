// Import the express module
import express from 'express';

// Create an express appliocation
const app = express();

//Define a port number where server will listen
const PORT = 3001; 
// const HOST = "0.0.0.0";

// Enable static file serving 
app.use(express.static('public'));


// Define our main route ('/')
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});


// Define /thanks route ('/')
app.get('/thanks', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/thanks.html`);
});


// Start server and listed on designed port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});