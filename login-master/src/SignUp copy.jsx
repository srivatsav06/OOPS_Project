import React, { Component, useState } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import Logo from './logo.jsx' 
import Loginpagepic from './LoginPagePic.jsx' 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function SignUp() {
  const [activeItem, setActiveItem] = useState(null);
  const [isMousedOver, setMouseOver] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  function handleLogin() {
    // setMouseOver(true);
    const email1 = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const role1=activeItem;
    const name1= document.querySelector("#signUpName").value;
    console.log(name1)
    console.log(email1);
    console.log(password);
    console.log(role1);
    axios
      .post("http://localhost:8081/users/signup", { name:name1,email:email1, password:password})
      .then((response) => {
        console.log(response.data);
        if(response.status==200){
          const userId = response.data.id;
          const userName=response.data.name;
          localStorage.setItem("userId", userId);
          localStorage.setItem("userName",userName)
          navigate('/dashboard');
          console.log("success",response.status);

        }
        if(response.status==201){
          console.log("notsuccess");
          alert("user already exits");
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }

    return (
        <div className='dengs'>
        <div>
        <Logo/>
       <div className='signup' style={{ position:"relative",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '560px', paddingLeft: '45px' }}>
      <Menu compact icon='labeled' color='black' size='massive'>
        <Menu.Item
          name='Student'
          active={activeItem === 'Student'}
          onClick={handleItemClick}
          style={{ backgroundColor: activeItem === 'Student' ? 'skyblue' : '' }}
        >
        Student
        </Menu.Item>

        <Menu.Item
          name='Faculty'
          active={activeItem === 'Faculty'}
          onClick={handleItemClick}
          style={{ backgroundColor: activeItem === 'Faculty' ? 'skyblue' : '' }}

        >
          Faculty
        </Menu.Item>
      </Menu>
      <div className='signin2'>
      <div  style={{ position: 'relative', top: '15%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <input name="myInput" id="signUpName"  placeholder="Username" style={{width:"220px"}}/>
      </div>
      <div  style={{ position: 'relative', top: '17%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <input name="myInput" id="email" placeholder="Email" style={{width:"220px"}}/>
      </div>
      <div   style={{ position: 'relative', top: '19%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <input name="myInput" type='password' id='password' placeholder="Password" style={{width:"220px"}}/>
      </div>
      <div  style={{ position: 'relative', top: '21%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <input name="myInput" type='password' placeholder="Confirm-password" style={{width:"220px"}}/>
      </div>
      <button className="in2" style={{ position: 'relative', top: '24%', left: '50%', transform: 'translate(-50%, -50%)' ,width:"220px",backgroundColor: isMousedOver ? "white" : null, color: isMousedOver? "#4c3a8d": "white"}}
      onClick={handleLogin}
      >
    signup
</button>    
 </div>
 </div>
 </div>
      </div>
    )
  }
export default SignUp;