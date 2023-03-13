import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Value from './Value';

function App() {

  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          counter : {counter}
        </p>
        <div>
          <button
            onClick={
              () => setCounter(counter + 10)
            }
          >
            +10
          </button>
          <button
            onClick={
              () => setCounter(counter + 1)
            }
          >
            +1
          </button>
          <button
            onClick={
              () => setCounter(0)
            }
          >
            초기화
          </button>
          <button onClick={() => setCounter(counter - 1)}>-1</button>
          <button onClick={() => setCounter(counter - 10)}>-10</button>
        </div>

        <Value counter={counter} setCounter={setCounter} />

      </header>
    </div>
  );

}

export default App;
