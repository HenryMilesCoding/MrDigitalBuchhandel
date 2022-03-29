//import logo from './logo.svg';
import './App.css';
import BuchListe from './components/BuchListe';

function App() {
  return (
    <div className="App">

      <div className="row mb-3">
        <div className="col-md-8">
        Bitte treffen Sie Ihre Buchauswahl. Es wird immer der günstigste Preis für Sie berechnet.

        <BuchListe></BuchListe>
        </div>

        <div className="col-md-4">Endpreis:
        <h1 className="display-1">21.33</h1>
        </div>
      </div>

      <div className="row mx-5">
      <button type="button" className="btn btn-primary">So bestellen</button>
      </div>

    </div>
  );
}

export default App;
