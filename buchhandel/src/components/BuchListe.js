import react from 'react';
import Buch from './Buch';

{/* Erzeugt die Form mit den Büchern */}
const BuchListe = () => {
    return (
        <div>
            <div className="text-center">Bitte treffen Sie Ihre Buchauswahl. Es wird immer der günstigste Preis für Sie berechnet.</div>
            <form>
                <Buch teil="1"></Buch>
                <Buch teil="2"></Buch>
                <Buch teil="3"></Buch>
                <Buch teil="4"></Buch>
                <Buch teil="5"></Buch>

            </form>
        </div>
    );
}

export default BuchListe;