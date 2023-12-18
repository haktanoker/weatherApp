import './app.css';

function App({info, state}) {
  return (
    <div>
    {
        state ? 
        <> 
            <p id="sehir">{info.name}, {info.sys.country}</p>
            <p id="sicaklik">Sıcaklık: <span>{info.main.temp}</span> °C</p>
            <p id="durum">{info.weather[0].description}</p>
            <p id="hissedilen">Hissedilen Sıcaklık: <span>{info.main.feels_like}</span> °C</p> 
        </> 
        : 
        null
    }
    </div>
  );
}

export default App;
