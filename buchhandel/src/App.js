//import logo from './logo.svg';
import './App.css';
import BuchListe from './components/BuchListe';

function App() {
  return (
    <div className="App">

      <div className="row mb-3">
        <div className="col-md-8">

        <BuchListe></BuchListe>
        </div>

        <div className="col-md-4">Endpreis :
        <h1 className="display-1" id="Preisanzeige">21.33</h1>

        <p className="lh-sm fs-6">Staffelung : <br />
        2 u. = 5%, 3 u. = 10%, 4 u. = 20%, 5 u. = 25%
        </p>
        </div>
      </div>

      <div className="row mx-5">
      <button type="button" className="btn btn-primary" id="Bestellbutton">Zusammenstellung bestellen</button>
      </div>

    </div>
  );
}

export default App;
