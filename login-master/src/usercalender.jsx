import React from 'react';
import ReactDOM from 'react-dom';
import FullCalendarApp from './Calender';
import Navbar from './Navbar'
function UserCalender(){
    return <div className="column">
       
       <Navbar/>
       <div  style={{
        backgroundColor:"#FFF5DE",
        width: '25%',
        height: '710px'
      }}>
       <h3 style={{position:"absolute",marginLeft:"50px",marginTop:"200px"}}>UserName:sampu</h3>
       <h3 style={{position:"absolute",marginLeft:"50px",marginTop:"250px"}}>Email:sampu123@.gmail.com</h3>
       <h3 style={{position:"absolute",marginLeft:"50px",marginTop:"300px"}}>I'am a student</h3>
        </div>
        <div style={{position:"relative",marginLeft:"600px",marginTop:"-750px"}}>
       <FullCalendarApp/>
        </div>
    </div>
    }
    
export default UserCalender;