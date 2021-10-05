import React from "react";
const sum = 4 + 6;
const HolaMundo = (props) => {
    const Hello = "Hola Mundo!";
    const isTrue = false;
    return (
        <div className='HolaMundo'>
            <h1>
                {Hello} {props.saludo} {sum}
            </h1>
            <h2>Esencial de react</h2>
            <img src='https://arepa.s3.amazonaws.com/react.png' alt='React'></img>
            {isTrue ? <h4>Soy verdadero</h4> : <h5>Soy Falso</h5>}
            {isTrue && <h4>Soy Verdadero</h4>}
        </div>
    );
};

export default HolaMundo;
