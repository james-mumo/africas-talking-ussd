// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import ussdRouter from "./ussdRouter.js";

// Create Express app
const app = express();
const port = 5000;

// Body parser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the USSD router at '/ussd' path
app.use("/api", ussdRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
