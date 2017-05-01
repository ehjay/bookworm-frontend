import React, { Component } from 'react';
import axios from 'axios';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
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
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={(event) => this.handleTitleChange(event)} />
        </label>
        <label>
          Author:
          <input type="text" value={this.state.author} onChange={(event) => this.handleAuthorChange(event)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BookForm;
