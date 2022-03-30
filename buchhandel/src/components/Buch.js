import React from "react";

const MengeLesen = () => {
    alert("Menge wurde erkannt");
  }

{/* Erzeugt die Form mit den Büchern */}
const Buch = (props) => {
    return (
            <div className="card m-3">
                <div className="card-header">Harry Potter { props.teil }</div>
                <div className="card-body">Buchbeschreibung...</div>
                
                <div className="card-footer">
                    Ich möchte davon
                    <input onChange={MengeLesen} className="mx-3" type="number" id={ "Iteil"+props.teil } name={ "Nteil"+props.teil } min="0" max="10" />
                    Stk. bestellen
                </div>
            </div>
    );
}

export default Buch;