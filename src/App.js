import React, { Component } from 'react';
import Compteur from './Compteur';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompteur: true
    };
  }

  toggleCompteur = () => {
    this.setState(prevState => ({ showCompteur: !prevState.showCompteur }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Cycle de Vie d'un Composant</h1>
        <button onClick={this.toggleCompteur}>
          {this.state.showCompteur ? "Masquer Compteur" : "Afficher Compteur"}
        </button>
        {this.state.showCompteur && <Compteur />}
      </div>
    );
  }
}

export default App;
