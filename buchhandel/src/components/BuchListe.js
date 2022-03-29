import react from 'react';

const BuchListe = () => {
    return (
        <div>
            <form>


                <p>
                <label>HP 1:
                <input type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                </label>
                </p>

                <p>
                <label>HP 2:
                <input type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                </label>
                </p>

                <p>
                <label>HP 3:
                <input type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                </label>
                </p>

                <p>
                <label>HP 4:
                <input type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                </label>
                </p>

                <p>
                <label>HP 5:
                <input type="number" id="iAnzahlIn1" name="nAnnzahlIn1" min="1" max="10" />
                </label>
                </p>
            </form>
        </div>
    );
}

export default BuchListe;