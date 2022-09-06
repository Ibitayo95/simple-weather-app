const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  https = require("https"),
  port = 3000;

// support parsing of application/json type post data
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/weather", (req, res) => {
  const userInput = req.body.cityName;
  const query = userInput;
  const appId = "37517b5371818801b490caba360fd0e5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appId}`;

  https.get(url, function (response) {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      res.send(weatherData);
    });
  });
});

app.listen(port, () => {
  console.log(`Weather app listening on port ${port}`);
});
