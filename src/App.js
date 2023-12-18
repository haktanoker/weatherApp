import Input from './input';
import Info from './info';
import { useState } from 'react';

function App() {

  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false)

  return (
    <div className="container">
      <div className="card">
          <h2>HAVA DURUMU</h2>
          <Input setInfo = {setInfo} setState = {setState}/>
          <Info info = {info} state = {state} />
      </div>
    </div>
    
  );
}

export default App;