import React, { Component } from 'react';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.title && this.state.author) {
      // send to backend
      this.setState({
        title: '',
        author: '',
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </label>
        <label>
          Author:
          <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BookForm;
