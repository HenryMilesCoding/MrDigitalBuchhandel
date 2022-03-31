import React, {useRef} from "react";

const Preisanzeige = (props) => {
    //const [message, setMessage] = React.useState('');
    
    return (
    <div>
    <h1 className="display-1" id="Preistaffel">{ props.preis }</h1>
    </div>
    );
  };

  export default Preisanzeige;