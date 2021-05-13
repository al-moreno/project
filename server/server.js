import express from 'express';
import data from './data.js';



// const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/items', (req, res) => {
    res.send(data.items);
})
app.get('/', (req, res) =>{
    res.send("Server listening");
});

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Serve up static assets (usually on heroku)
// 

// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
// );

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
