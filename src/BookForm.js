import React, { Component } from 'react';
import axios from 'axios';
import './BookForm.css';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
    this.loadBooks = props.loadBooks;
  }
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handleAuthorChange(event) {
    this.setState({author: event.target.value});
  }
  handleSubmit(event) {
    if (this.state.title && this.state.author) {
      axios.post('http://localhost:8080/book', {
        title: this.state.title,
        author: this.state.author,
      })
      .then(() => {
        this.loadBooks();
      })
      .catch((err) => {
        console.error('Error creating new book', err);
      });

      this.setState({
        title: '',
        author: '',
      });

    }
    event.preventDefault();
  }
  render() {
    return (
      <form
        className='form-inline book-form'
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <div className='form-group'>
          <label className='sr-only'>Title</label>
          <input
            placeholder='Title'
            className='form-control col-xs-3'
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleTitleChange(event)}
          />
        </div>
        <div className='form-group'>
          <label className='sr-only'>Author</label>
          <input
            placeholder='Author'
            className='form-control'
            type="text"
            value={this.state.author}
            onChange={(event) => this.handleAuthorChange(event)}
          />
        </div>
        <button type="submit" className='btn btn-primary'>
          Add Book
        </button>
      </form>
    );
  }
}

export default BookForm;
