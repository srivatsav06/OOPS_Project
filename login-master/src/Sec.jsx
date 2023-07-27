import React, { useState } from 'react'
import { Menu, Segment , Dropdown,Icon} from 'semantic-ui-react'
import Side from './Sidenav.jsx' 
import Navbar from './Navbar.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Sec(){
    const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('home');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleItemClick = (e, { name }) => setActiveItem(name);
    const uid=localStorage.getItem("userId")
  function handleDelete() {
      console.log("oijyhgfd");
    axios
      .post("http://localhost:8081/users/delete/"+uid)
      .then(response => {
        if (response.status==200) {
            alert("successfully deleted");
            navigate('/login');
        }
        
      })
      .catch(error => {
        console.error('password wrong!', error);
      });
  };

  return (
    <div>
      <Navbar />
      <Side/>
      <div style={{position:"relative",bottom:-10,left: 350}}>
        <h2>Security</h2>
        <h4>ChangePassword</h4>
      </div>
      <div style={{position:"relative",bottom: -15,left:350}}> 
        <input style={{width:"300px"}} value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div style={{position:"relative",bottom: -20,left: 350}}>
        <h4>ConfirmPassword</h4>
      </div>
      <div style={{position:"relative",bottom: -25,left:350}}> 
        <input style={{width:"300px"}} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </div>
      <div style={{position:"relative",bottom: -30,left: 350}}>
        <h4>CurrentPassword</h4>
      </div>
      <div style={{position:"relative",bottom: -35,left:350}}> 
        <input style={{width:"300px"}} value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
      </div>
      <button className="but1" style={{position:"relative",bottom: -45,left: 350}}>
        cancel
      </button>
      <button className="but1" style={{position:"relative",bottom: -45,left: 360,backgroundColor:"#8972d7",border:"5"}} onClick={handleItemClick}>
        save
      </button>
      <div style={{position:"relative",bottom:-50,left: 349}}>
        <h2>DeleteYourAccount</h2>
      </div>
      <div style={{position:"relative",bottom:-55,left:350}}> 
        <h4>Password</h4>
      </div>
      
      <div style={{position:"relative",bottom: -60,left:350}}> 
        <input style={{width:"300px"}}/>
      </div>
      <div style={{position:"relative",bottom: -65,left:350}}> 
        <p>Are you sure you want to delete the Account?</p>
      </div>
      <div style={{position:"relative",bottom: -70,left:350}}> 
        <p><span style={{color:"red"}}>Note</span> : you cant Restore the Account back.!</p>
      </div>
      <div className="but1" style={{position:"relative",bottom: -75,left:338,color:"red"}}>
        <button onClick={handleDelete} style={{width:"6 00",color:"white",backgroundColor:"teal"}}>DeleteYourAccount</button>
      </div>
    </div>  
  );
}

export default Sec;

