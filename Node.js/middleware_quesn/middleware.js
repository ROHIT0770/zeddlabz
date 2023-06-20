const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

// Create a middleware that validates the JWT token in the request header
const authMiddleware = (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.headers["x-access-token"];

  // If the token is not present, return a 401 unauthorized response
  if (!token) {
    res.status(401).send("Unauthorized");
    return;
  }

  // Try to decode the JWT token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If the JWT token is valid, set the user id on the request
    req.user = decoded.user;

    // Next middleware in the chain
    next();
  } catch (err) {
    // If the JWT token is invalid, return a 401 unauthorized response
    res.status(401).send("Unauthorized");
  }
};

// Add the authMiddleware to the app
app.use(authMiddleware);

// Create a route that requires authentication
app.get("/protected", (req, res) => {
  // If the user is not authenticated, return a 401 unauthorized response
  if (!req.user) {
    res.status(401).send("Unauthorized");
    return;
  }

  // The user is authenticated, so send a success response
  res.send("Welcome!");
});

app.listen(3000);
