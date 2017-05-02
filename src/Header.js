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
        Bookworm
      </div>
    );
  }
}

export default Header;
