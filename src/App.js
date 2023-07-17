import Comp1 from './components/Comp1';
import './App.css';
import { createContext } from 'react';

export const SentenceContext = createContext('')

function App() {
  const prezime = 'Kis'
  const end = "tocka"

  return (
    <div className="App">
      <SentenceContext.Provider value={end}>
        <Comp1 prezime={prezime}/>
      </SentenceContext.Provider>
    </div>
  );
}

export default App;
