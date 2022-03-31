import React, {useRef} from "react";
import * as ReactDOM from 'react-dom';
import Preisanzeige from "./Preisanzeige";




function MengeLesen (e) {
    console.log(e.target.value + 'x Harry Potter ' + e.target.id);   
}

{/* Erzeugt die Form mit den Büchern */}
const Buch = (props) => {
    return (
            <div className="card m-3">
                <div className="card-header">Harry Potter { props.teil }</div>
                <div className="card-body">Buchbeschreibung...</div>
                
                <div className="card-footer">
                    Ich möchte davon
                    <input onChange={MengeLesen} className="mx-3 buch" type="number" id={ props.teil } name={ "Nteil"+props.teil } min="0" max="10" />
                    Stk. bestellen
                </div>
            </div>
    );
}

export default Buch;