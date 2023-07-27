import React from 'react';
import ReactDOM from 'react-dom';
import FullCalendarApp from './Calender';
import Navbar from './Navbar'
function UserCalender2(){
    return <div className="column">
       
       <Navbar/>
       <div  style={{
        backgroundColor:"#FFF5DE",
        width: '25%',
        height: '710px'
      }}>
       <h3 style={{position:"absolute",marginLeft:"50px",marginTop:"200px"}}>User1</h3>
       <h3 style={{position:"absolute",marginLeft:"50px",marginTop:"250px"}}>User2</h3>
       <h3 style={{position:"absolute",marginLeft:"50px",marginTop:"300px"  }}>User3</h3>
       

        </div>
        <div style={{position:"relative",marginLeft:"600px",marginTop:"-750px"}}>
       <FullCalendarApp/>
        </div>
        <span style={{display: "inline"}}>
        <button class="button-34" id="buttona1" role="button">Add to Cart</button>
        <button class="button-35" id="buttona2" role="button">Check Availability</button>
        </span>
    </div>
    }
    
export default UserCalender2;