import React, {useState} from "react";
import Logo from "./logo.jsx"
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";



function Login(){
  const navigate = useNavigate();
  const [isMousedOver, setMouseOver] = useState(false);
  function handleClick()
  {
    setMouseOver(true);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleForgot(){
    setMouseOver(true);
    const email1 = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log(email1);
    console.log(password);
    axios.post("http://localhost:8081/users/forgotPassword?email="+email1)
    .then((response) => {
      console.log(response.data);
      if(response.status==200){
        alert("password sent to your mailid");

      }
      if(response.status==201){
        console.log("notsuccess");
        alert("user does not exist");
      }

    })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleLogin() {
    setMouseOver(true);
    const email1 = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log(email1);
    console.log(password);
    axios
      .post("http://localhost:8081/users/signin", { email:email1, password:password })
      .then((response) => {
        console.log(response.data);
        if(response.status==200){
          const userId = response.data.id;
          const userName=response.data.name;
          localStorage.setItem("userId", userId);
          localStorage.setItem("userName",userName)
          localStorage.setItem("events",response.data.events)

          navigate('/dashboard');
          console.log("success",response.status);

        }
        if(response.status==201){
          console.log("notsuccess");
          alert("username or pass wrong please try again ;; ");
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }
    return <div className="column">
    <Logo /> 
    <div className="container">
      <h2>Login</h2>
      <br></br>
      
      <input type="text" className="LoginInput" id="email" placeholder="email-id" />
      <input type="password" className="LoginInput" id="password" placeholder="password" />
      <button className="LoginButton"
        style={{ position:"relative",top:"00px",left:"110px", backgroundColor: isMousedOver ? "white" : null, color: isMousedOver? "#4c3a8d": "white" }}
        onClick={handleLogin}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Login
      </button>
      <button className="LoginButton"
      style={{position:"relative",top:"100px",left:"-120px"}}
      onClick={handleForgot}>Forgot Password
      </button>
      <p>Don't have an account?<Link to='/signup'>Sign up here </Link></p>
    </div>
    
    </div>
    
    
}

export default Login;
