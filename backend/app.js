const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const helmet = require('helmet')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json'); 
const authRouter = require('./routers/auth')
const connectDb = require("./utils/database");
const options = {
  explorer: true
};
const session = require('express-session');
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

const app = express();
// connect database
connectDb(mongo_uri);

app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//built-in middleware for json
app.use(express.json());

//express session middleware
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
  }))

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use(cookieParser(process.env.JWT_SECRET));

// setup routes

app.use("/api/auth", authRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


//Setting Up Server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});