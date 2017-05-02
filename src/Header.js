import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <FontAwesome
          name='book'
          size='2x'
        />
        <h3>
          Bookworm
        </h3>
      </div>
    );
  }
}

export default Header;
