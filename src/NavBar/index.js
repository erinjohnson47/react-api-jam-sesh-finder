import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
  state = {
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          // Link to='/event'
        >
          Home
        </Menu.Item>
        <Link to='/user/register'>
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
          // Link to='/user/register'
        >
          Register
        </Menu.Item>
        </Link>
        <Link to='/user/login'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
          // Link to='/user/login'
        >
          Login
        </Menu.Item>
        </Link>
        <Link to='/user/profile'>
        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
          // Link to='/user/profile'
        >
          Profile
        </Menu.Item>
        </Link>
        <Link to='/event'>
        <Menu.Item
          name='events'
          active={activeItem === 'events'}
          onClick={this.handleItemClick}
          // Link to='/event'
        >
         Events
        </Menu.Item>
        </Link>
      </Menu>
    )
  }
}


