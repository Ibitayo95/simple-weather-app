require("dotenv").config();
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  https = require("https"),
  path = require("path"),
  port = process.env.PORT || 3001,
  cors = require("cors");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post("/weather", (req, res) => {
  const userInput = req.body.cityName;
  const query = userInput;
  const appId = process.env.API_KEY;
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
