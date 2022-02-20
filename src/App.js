import './App.css';
import {getForecast, getLocation} from "./Api/weatherApi";

function App() {

    const onClick = async () => {

        let data = await getLocation("Kiev");
        console.log(data);

        let forecast = await getForecast(data.woeid);
        console.log(forecast);
    }

    return (
        <div className="App">
            <button onClick={onClick}>Click me!</button>
        </div>
    );
}

export default App;
