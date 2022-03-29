import react from 'react';

{/* Erzeugt die Form mit den Büchern */}
const BuchListe = () => {
    return (
        <div>
            <form>

            <div className="card m-3">
                <div className="card-header">Harry Potter 1</div>
                <div className="card-body">Buchbeschreibung...</div>
                
                <div className="card-footer">
                    Ich möchte davon
                    <input className="mx-3" type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                    Stk. bestellen
                </div>
            </div>

            <div className="card m-3">
                <div className="card-header">Harry Potter 2</div>
                <div className="card-body">Buchbeschreibung...</div>
                
                <div className="card-footer">
                    Ich möchte davon
                    <input className="mx-3" type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                    Stk. bestellen
                </div>
            </div>

            <div className="card m-3">
                <div className="card-header">Harry Potter 3</div>
                <div className="card-body">Buchbeschreibung...</div>
                
                <div className="card-footer">
                    Ich möchte davon
                    <input className="mx-3" type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                    Stk. bestellen
                </div>
            </div>

            <div className="card m-3">
                <div className="card-header">Harry Potter 4</div>
                <div className="card-body">Buchbeschreibung...</div>
                
                <div className="card-footer">
                    Ich möchte davon
                    <input className="mx-3" type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                    Stk. bestellen
                </div>
            </div>

            <div className="card m-3">
                <div className="card-header">Harry Potter 5</div>
                <div className="card-body">Buchbeschreibung...</div>
                
                <div className="card-footer">
                    Ich möchte davon
                    <input className="mx-3" type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                    Stk. bestellen
                </div>
            </div>


            </form>
        </div>
    );
}

export default BuchListe;