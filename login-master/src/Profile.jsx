import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Navbar from './Navbar';

const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2021-06-14T10:00:00',
    end: '2021-06-14T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2021-06-16T13:00:00',
    end: '2021-06-16T18:00:00',
  },
  { id: 3, title: 'event 3', start: '2021-06-17', end: '2021-06-20' },
];

function Profile() {
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
      const name= "Rahul";
      const nameStyle={
          position:'relative',
          top: '30px',
          
      }
  return (
    <div>
    <Navbar />
    <div className='DashBoard'>
    <div style={styles2}>
        
    </div>
    <div style={styles1}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        
        events={events}
        eventColor="red"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
    
    </div>
    </div>
  );
}

export default Profile;