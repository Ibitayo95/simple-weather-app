const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  https = require("https"),
  path = require("path");
port = process.env.PORT || 3001;
const cors = require("cors");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

app.use(cors());

// support parsing of application/json type post data
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/weather", (req, res) => {
  const userInput = req.body.cityName;
  const query = userInput;
  const appId = "4fce6d7cf2c4d7ffad6c3e3d686ad506";
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
