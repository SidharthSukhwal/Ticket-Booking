const express = require('express');
const app = express();
const port = 5000; // You can change this to any desired port number

// Sample data for local place names in Udaipur
const localPlaces = [
    "City Palace",
    "Lake Pichola",
    "Jag Mandir",
    "Fateh Sagar Lake",
    "Saheliyon Ki Bari",
    // Add more place names here
];

// Define a route to get local place names
app.get('/get_local_places', (req, res) => {
    res.json(localPlaces);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
