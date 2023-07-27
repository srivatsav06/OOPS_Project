import React,{ useEffect, useState } from "react";
import UpcomingEvents from "./UpcomingEvents";
import Navbar from "./Navbar.jsx";
import FullCalendarApp from "./Calender";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Dashboard() {
    const styles1 = {
      flex: '4',
    };
    const styles2 = {
      flex: '1',
    };
    const calendarStyles = {
      width: '100%',
      height: '500px',
    };
    const eventStyles={
        width : '20%'
    }
    localStorage.getItem("userId");
    const [event, setEvent] = useState([]);
    var name= localStorage.getItem("userName");;
    const nameStyle={
        position:'relative',
        top: '30px',}
    
    
        // useEffect(async() => {
        //   try {
        //   const result = await axios.get(`http://localhost:8081/users/id/${localStorage.getItem('userId')}`)
        //   console.log(result);
        //   } catch (error) {
        //     console.log(error)
        //   }
          
        // }, []);
              // const events = response.data.map((event) => {
              //   return {
              //     "id": event.id,
              //       "numPeople": event.numPeople,
              //         "duration": event.duration,
              //         "importance": event.importance,
              //       "datetime": event.datetime,
              //       "room": {
              //       "id": event.room.id,
              //       "name": event.room.name,
              //       "capacity": event.room.capacity,
              //         "location": event.room.location
              //   }
              // }
              // });
              // setEvent(events);
            
            
    
    return (
      <div>
        <Navbar />
        <h2 className="Dash">Welcome  {name}!</h2>
        <div className="Dashboard">
          <div style={styles1}>
            <div style={calendarStyles}>
              <FullCalendarApp event={localStorage.getItem('events')} />
            </div>
          </div>
          <div style={styles2}>
            <UpcomingEvents />
          </div>
        </div>
      </div>
    );
  }
  

export default Dashboard;
