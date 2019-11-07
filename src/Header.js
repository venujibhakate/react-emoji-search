import React, {Component } from "react";
import "./Header.css";
import emoji from './1.png';
import emoji1 from './2.png';

export default class Header extends Component {
  render() {
    return (
      <header className="component-header">
        <img
          src={emoji}
          alt="image"
        />
        Emoji Search
        <img
          src={emoji1}
          alt="image"
        />
      </header>
    );
  }
}
