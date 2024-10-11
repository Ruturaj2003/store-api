require("dotenv").config();

const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// Server Setup
const app = express();

// Midlleware that do parsing
app.use(express.json());

// Routes
app.get("/", (res, req) => {
  res.send("<h1> Store API </h1> <br/> <br/> <a href='/api/v1/products'</a> ");
});

// IMP ALWAYS KEEP MIDDLEWARE LIKE THE FOLLOWING BELOW ALL THE ROUTES
// Middleware
app.use(notFound);
// ERROR Handler Always last
app.use(errorHandlerMiddleware);

// Server Listen Code

const PORT = process.env.PORT || 6500;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.dir(error);
  }
};

startServer();
