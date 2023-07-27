import React, { useState } from 'react'
import { Menu, Segment , Dropdown,Icon} from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar(){
  const [activeItem,setActiveItem]=useState('home') 

  const handleItemClick = (e, { name }) => setActiveItem(name)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userID');
    localStorage.removeItem('userName');
    localStorage.removeItem('events');
    navigate('/login')
  }
  
  return (
    <div>
      <div className='navbar1'>
        <Menu pointing secondary>
          <Menu.Item>
            <img alt="logo" src="./images/logo.png" />
          </Menu.Item>
          <Link to='/dashboard' style={{textDecoration: 'none'}}>
            <Menu.Item
              name='Dashboard'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to='/search' style={{textDecoration: 'none'}}>
            <Menu.Item
              name='Search'
              active={activeItem === 'Search'}
              onClick={handleItemClick}
              style={{ display: 'flex', alignItems: 'end' }}
            />
          </Link>
          <Link to="/requests" style={{textDecoration: 'none'}}>
            <Menu.Item
              name='Request'
              active={activeItem === 'Request'}
              onClick={handleItemClick}
            />
          </Link>
          <Menu.Menu position='right'>
            <Menu.Item>
              <div className="navbar2">
                <Icon name='user circle icon' size='big'/>
              </div>
            </Menu.Item>
            <div className='profile'>
              <Dropdown item text='Profile'>
                <Dropdown.Menu>
                <Link to="/profile" style={{textDecoration: 'none'}}><Dropdown.Header><i class="user circle"></i>profile</Dropdown.Header></Link>
                  <Dropdown.Item>notifications</Dropdown.Item>
                  <Dropdown.Item>help</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLogout()}>logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar;
