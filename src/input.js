import {useState } from 'react';
import axios from 'axios';

function App({setInfo, setState}) {

    const [city, setCity] = useState("");

    const handleChange = async () => {
        try {
            let API = "YOUR_API";
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric&lang=tr`;
            await axios(url).then(res => setInfo(res.data));
            setState(true);
            setCity("");
        } catch (error) {
            alert("Yanlış bölge adı");
        }
        
    }

  return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); handleChange()}}>
                <input value={city} type="text" id="city_value" onChange={(e) => setCity(e.target.value)}/>
                <button type="submit">Hava Durumunu Gör</button>
            </form>
        </>
  );
}

export default App;
