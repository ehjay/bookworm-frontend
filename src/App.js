import React, { Component } from 'react';
import './App.css';

import Catalogue from './Catalogue';

class App extends Component {
  constructor() {
    super();
    this.books = [
      { id: 0, author: 'Shakespeare', title: 'Macbeth' },
      { id: 1, author: 'Salinger', title: 'Catcher in the Rye' },
    ];
  }
  render() {
    return (
      <Catalogue books={this.books} />
    );
  }
}

export default App;
