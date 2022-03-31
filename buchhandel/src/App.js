import './App.css';
import BuchListe from './components/BuchListe';
import Preisanzeige from './components/Preisanzeige';

function App() {
  return (
    <div className="App">

      <div className="row mb-3">
        <div className="col-md-8">
          <BuchListe></BuchListe>
        </div>

      <div className="col-md-4">Endpreis :
        <Preisanzeige preis="0.00"></Preisanzeige>

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
