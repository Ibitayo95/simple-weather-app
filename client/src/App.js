import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Header text="Simple Weather App" />
      <Input />
      <WeatherCard />
    </div>
  );
}

export default App;
