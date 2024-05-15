const express = require('express');
const bodyParser = require('body-parser');
// const swaggerUi = require('swagger-ui-express');
// const swaggerJSDoc = require('swagger-jsdoc');
const register = require("routes/register");
const login = require("routes/login");
const profile = require("routes/profile");
const users = require("routes/users");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/register", register);
app.use("/login", login);
app.use("/profile", profile);
app.use("/users", users);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
