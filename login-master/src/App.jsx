import React from "react";
import FinalLogin from "./FinalLogin";
import { BrowserRouter as Router,Routes, 
  Route, Navigate} from "react-router-dom";
import SignUp from "./SignUp";
function App() {
   return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          fghjkl;
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={FinalLogin} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/signup" component={SignUp} />
            
    
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Navigate to="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
