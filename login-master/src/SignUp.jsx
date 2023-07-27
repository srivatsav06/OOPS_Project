import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import Logo from './logo.jsx' 
import Loginpagepic from './LoginPagePic.jsx' 

export default class MenuExampleCompact extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div className='dengs'>
        <div>
        <Logo/>
       <div className='signup' style={{ position:"relative",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '560px', paddingLeft: '45px' }}>
      <Menu compact icon='labeled' color='black' size='massive'>
        <Menu.Item
          name='Student'
          active={activeItem === 'Student'}
          onClick={this.handleItemClick}
          style={{ backgroundColor: activeItem === 'Student' ? 'skyblue' : '' }}
        >
        Student
        </Menu.Item>

        <Menu.Item
          name='Faculty'
          active={activeItem === 'Faculty'}
          onClick={this.handleItemClick}
          style={{ backgroundColor: activeItem === 'Faculty' ? 'skyblue' : '' }}

        >
          Faculty
        </Menu.Item>
      </Menu>
      <div className='signin2'>
      <div  style={{ position: 'relative', top: '15%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <input name="myInput"  placeholder="Username" style={{width:"220px"}}/>
      </div>
      <div  style={{ position: 'relative', top: '17%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <input name="myInput"  placeholder="Email" style={{width:"220px"}}/>
      </div>
      <div   style={{ position: 'relative', top: '19%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <input name="myInput"  placeholder="Password" style={{width:"220px"}}/>
      </div>
      <div  style={{ position: 'relative', top: '21%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <input name="myInput"  placeholder="Confirm-password" style={{width:"220px"}}/>
      </div>
      <button className="in2" style={{ position: 'relative', top: '24%', left: '50%', transform: 'translate(-50%, -50%)' ,width:"220px"}}>
    signup
</button>    
 </div>
 </div>
 </div>
      </div>
    )
  }
}