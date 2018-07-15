import React, { Component } from 'react';
import Bienvenida from './Componentes/bienvenida';
import './App.css';
import Lista from './Componentes/Lista';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'addNewName': '',
      'addNewListName': '',
      name: "Alejandro",
      listas: []
    }
  }
  handleInputChange = (e) => {
    this.setState({ addNewName: e.target.value })
  }
  handleInputListChange = (e) => {
    this.setState({ addNewListName: e.target.value })
  }
  generateId(namespace) {
    return `${namespace}-${Date.now()}-${Math.round(Math.random()*100)}`

  }

  changeNameHandler = () => {
    const nombre = this.state.addNewName;
    this.setState(prevState => {
      prevState.name = nombre;
      return ({ addNewName: '', name: prevState.name });
    });
  }
  addNewNameHandler = () => {
    const listaNueva= {
      listID: this.generateId('lista'),
      name: this.state.addNewListName,
      tareas:[]
    }

    this.setState(prevState=>{
      prevState.listas.push(listaNueva);
      return ({listas:prevState.listas, addNewListName:''});
    });
  }

  render() {
    let listado;
    if (this.state.listas.length===0) {
      listado = <h4>No hay listas preparadas</h4>;
    } else {
      listado = this.state.listas.map(datosLista=>
        <Lista key={datosLista.listID} name={datosLista.name}/>
      )
    }
    return (

      <div className="App">
        <header className="App-header">
          <Bienvenida name={this.state.name} />
          <div className="App-header-content">
            <div>
              <p>Personalizar Nombre:</p>
              <input type="text" value={this.state.addNewName} onChange={this.handleInputChange} />
              <button onClick={this.changeNameHandler}>Cambiar Nombre</button>
            </div>
            <div className="separacion">
            </div>
            <div>
              <p>Agregar una lista:</p>
              <input type="text" value={this.state.addNewListName} onChange={this.handleInputListChange} />
              <button onClick={this.addNewNameHandler}>Crear Lista</button>
            </div>
          </div>
        </header>
        <section>
          <div className="App-listas">
            {listado}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
