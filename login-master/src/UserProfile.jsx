import React, { useState } from 'react'
import { Menu, Segment , Dropdown,Icon} from 'semantic-ui-react'
import Side from './Sidenav.jsx' 
import Navbar from "./Navbar.jsx"
export default function MenuExampleSecondaryPoin() {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
    <Navbar />
    <Side/>
    <div style={{position:"relative",bottom: -10,left: 350,width: "300px"}}>
    <h2>EditProfile</h2>
    <div id="header">
  <h4>
  <span>FirstName</span>
  <span>LastName</span>
  </h4>
</div>
<div style={{position:"relative",bottom: -10,left: 0,width: "300px"}}> 
<input/>
</div>
<div style={{position:"relative",bottom: 12,left: 370,width: "300px"}}> 
<input/>
</div>
<div style={{position:"relative",bottom: 2,left: 0,width: "300px"}}> 
<h4>email</h4>
<input style={{width: "400px"}}/>
<h4>Address</h4>
<input style={{width: "400px"}}/>
<h4>ContactNumber  </h4>
<input style={{width: "400px"}}/>
</div>
<div id="header1" style={{position:"relative",bottom: -12,left: 0,width: "300px"}}>
  <h4>
  <span>City</span>
  <span>State</span>
  </h4>
</div>
<div style={{position:"relative",bottom: -22,left: 0,width: "300px"}}> 
<input/>
</div>
<div style={{position:"relative",bottom: 0 ,left: 370,width: "300px"}}> 
<input/>
</div>
<button className='but1' style={{position:"relative",bottom: -20 ,left: 0}}>
cancel
</button>
<button className='but1' style={{position:"relative",bottom: -20 ,left: 12,backgroundColor:"#8972d7",border:"5"}}>
save
</button>
</div>
</div>
  );
}
