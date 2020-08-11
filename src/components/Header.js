import React from 'react';
import avatarSrc from '../assets/avatar.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kamal 24yo',
    };
  }

  render() {
    const { name } = this.state;
    const desc = `My name is ${name} and this is my resume/cv`.toUpperCase();
    return (
      <div className="app-header">
        <img src={avatarSrc} alt="avatrr" />
        <h1>HELLO,</h1>
        <h1>{desc}</h1>
        <div className="break-line" />
      </div>
    );
  }
}

export default Header;
