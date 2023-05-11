const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/teste", (request, response) => {
  response.send("<h1>Olá Mundo!</h1>");
});

app.post("/login", (request, response) => {
  response.send(request.body);
});

app.listen(8080, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Server open na 8080 ;)");
  }
});
