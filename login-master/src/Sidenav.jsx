import React, { Component } from 'react'
import { Menu ,Label,Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const{ activeItem } = this.state;
    return (
      
      <div className="side" style={{ position: 'fixed', top: '50%', left: 0, transform: 'translateY(-50%)' }}>
      <Menu pointing secondary vertical>
      <Link to="/profile" style={{textDecoration: 'none'}}><Menu.Item
          name='edit profile'
          active={activeItem === 'edit profile'}
          onClick={this.handleItemClick}
        >
          
          <Icon name='pencil alternate' />
          Edit profile
        </Menu.Item></Link>
        <Menu.Item
          name='notification'
          active={activeItem === 'notification'}
          onClick={this.handleItemClick}
        >
         <Icon name='bell outline' />
          Notifications
        </Menu.Item>
       <Link to="/security" style={{textDecoration: 'none'}}><Menu.Item
          name='security'
          active={activeItem === 'security'}
          onClick={this.handleItemClick}
        >
        <Icon name='lock' />
          Security
        </Menu.Item></Link> 
        <Menu.Item
          name='help'
          active={activeItem === 'help'}
          onClick={this.handleItemClick}
        >
        <Icon name='question circle outline icon' />
          Help
        </Menu.Item>
          
      </Menu>
      </div>
    )
  }
}