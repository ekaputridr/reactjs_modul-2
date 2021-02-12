import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Utama from './utama';

class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Link to="/home">
          <Menu.Item>
            <Image size='small' src='/logo.png' />
          </Menu.Item>
        </Link>
        <Menu pointing secondary>
          <Link to="/aboutme">
            <Menu.Item
            name='about me'
            active={activeItem === 'about me'}
            onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/work">
            <Menu.Item
            name='work'
            active={activeItem === 'work'}
            onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/contact">
            <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
        <p><Utama/></p>
      </div>
    )
  }
}

export default MenuExampleSecondaryPointing;