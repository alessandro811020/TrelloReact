import React from 'react';
import estilo from './bienvenida.css';

const bienvenida =(props)=>{
    return <h1 className="App-title" style={estilo}>Bienvenido a Trello {props.name}</h1>
}

export default bienvenida;