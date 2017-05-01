import React, { Component } from 'react';
import './App.css';

import BookForm from './BookForm';
import Catalogue from './Catalogue';

class App extends Component {
  constructor(props) {
    super(props);
    this.books = [
      { id: 0, author: 'Shakespeare', title: 'Macbeth' },
      { id: 1, author: 'Salinger', title: 'Catcher in the Rye' },
    ];
  }
  render() {
    return (
      <div>
        <BookForm />
        <Catalogue books={this.books} />
      </div>
    );
  }
}

export default App;
