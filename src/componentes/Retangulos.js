import React, { Component } from 'react';
import '../componentes/retangulos.css'

class Retangulos extends Component {
    render(){
        return(
        <div>
        <div className="retangulo-azul"></div>
        <div className="retangulo-cinza"></div>
        <div className="retangulo-verde"></div>
        </div>
        );
    }   
}

export default Retangulos