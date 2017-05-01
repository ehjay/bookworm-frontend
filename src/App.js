import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import BookForm from './BookForm';
import Catalogue from './Catalogue';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.loadBooks();
  }
  loadBooks() {
    axios.get('http://localhost:8080/books')
      .then((response) => {
        this.setState({
          books: response.data || [],
        });
      });
  }
  render() {
    return (
      <div>
        <BookForm loadBooks={this.loadBooks.bind(this)} />
        <Catalogue books={this.state.books} loadBooks={this.loadBooks.bind(this)} />
      </div>
    );
  }
}

export default App;
