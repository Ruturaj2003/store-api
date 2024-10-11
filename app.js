require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// Server Setup
const app = express();

// Midlleware that do parsing
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(
    "<h1> Store API </h1> <br/> <br/> <a href='/api/v1/products'>Link</a> "
  );
});

app.use("/api/v1/products", productsRouter);

// IMP ALWAYS KEEP MIDDLEWARE LIKE THE FOLLOWING BELOW ALL THE ROUTES
// Middleware
app.use(notFound);
// ERROR Handler Always last
app.use(errorHandlerMiddleware);

// Server Listen Code

const PORT = process.env.PORT || 6500;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.dir(error);
  }
};

startServer();
