import cors from 'cors';
import express from 'express';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Create an instance of express app
const app = express();

app.use(bodyParser.json({ limit: '30mb', extend: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extend: true }));

// Express now provides a way to parse json and urlencoded payloads
// without the need for body-parser package.
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Used to parse URL-encoded bodies

// Apply cors middleware to enable CORS
app.use(cors());

// Your other middlewares or routes
// ...

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
