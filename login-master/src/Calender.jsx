import React, { useState, useEffect  } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import axios from 'axios';

function FullCalendarApp({event}) {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  const handleNewButtonClick = () => {
    setShowDialog(true);
    setSelectedEvent(null);
    setEventDate('');
    setEventTime('');
    setEventTitle('');
    setEventEndTime('');
  };
 // events=[...event]
  const handleEventClick = (e) => {
   console.log(events.id);
    const event = events.find((event) => event.id === e.event.id);
    if (event) {
      setSelectedEvent(event);
      setEventDate(event.start ? event.start.toISOString().substring(0, 10) : '');
      setEventTime(event.start ? event.start.toISOString().substring(11, 16) : '');
    }
  };
  useEffect(() => {
    if (selectedEvent) {
      setShowDialog(true);
    }
  }, [selectedEvent]);

  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedEvent(null);
    setEventDate('');
    setEventTime('');
  };

  // React.useEffect(() => {
  //   const newEvents = [...event];
  //   const id = newEvents.length > 0 ? newEvents[newEvents.length - 1].id + 1 : 1;
  //   newEvents.push({
  //     id,
  //     title: eventTitle,
  //     start: `${eventDate}T${eventTime}`,
  //     end: `${eventDate}T${eventEndTime}`,
  //     allDay: false,
  //   });
  //     const datetimeString= newEvents[newEvents.length -1].start;
  //   const dateObj = new Date(datetimeString);
  //   const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' };
  //   const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);
  //   console.log(formattedDate);
  //   const startDate = newEvents[newEvents.length -1].start;
  // const endDate = newEvents[newEvents.length -1].end;
  // setEvents(newEvents);
  // handleCloseDialog();
  // }, [])

  const handleAddEvent = () => {
    const newEvents = [...events];
    const id = newEvents.length > 0 ? newEvents[newEvents.length - 1].id + 1 : 1;
    newEvents.push({
      id,
      title: eventTitle,
      start: `${eventDate}T${eventTime}`,
      end: `${eventDate}T${eventEndTime}`,
      allDay: false,
    });
  //   const datetimeString= newEvents[newEvents.length -1].start;
  //   const dateObj = new Date(datetimeString);
  //   const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' };
  //   const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);
  //   console.log(formattedDate);
  //   const startDate = newEvents[newEvents.length -1].start;
  // const endDate = newEvents[newEvents.length -1].end;
  // const durationMs = endDate.getTime() - startDate.getTime();
  //   axios
  //   .post("http://localhost:8081/events/create",{datetime:formattedDate,numPeople: 1,
  //   duration: durationMs,
  //   importance: 1,
  //   people: [153],
  //   room: []})
    setEvents(newEvents);
    handleCloseDialog();
  };
  const handleEditEvent = () => {
    const newEvents = events.map((event) => {
      if (event === selectedEvent) {
        return {
          ...event,
          title: eventTitle,
          start: `${eventDate}T${eventTime}`,
          end: `${eventDate}T${eventEndTime}`,
        };
      }
      return event;
    });
    setEvents(newEvents);
    handleCloseDialog();
  };
  
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay new',
        }}
        customButtons={{
          new: {
            text: 'new',
            click: handleNewButtonClick,
          },
        }}
        events={events}
        eventColor="red"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={handleEventClick}
      />

      <Dialog open={showDialog} onClose={handleCloseDialog} style={{ zIndex: 9999 }} >
        <DialogTitle>{selectedEvent ? `Edit Event ${selectedEvent.id}` : 'New Event'}</DialogTitle>
        <DialogContent>
  <TextField
    label="Title"
    type="text"
    value={eventTitle}
    onChange={(e) => setEventTitle(e.target.value)}
  />
  
  <TextField
    label="Date"
    type="date"
    value={eventDate}
    onChange={(e) => setEventDate(e.target.value)}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <TextField
    label="Start Time"
    type="time"
    value={eventTime}
    onChange={(e) => setEventTime(e.target.value)}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <TextField
    label="End Time"
    type="time"
    value={eventEndTime}
    onChange={(e) => setEventEndTime(e.target.value)}
    InputLabelProps={{
      shrink: true,
    }}
  />
</DialogContent>
        <DialogActions>
          {selectedEvent ? (
            <Button onClick={handleEditEvent}>Edit</Button>
          ) : (
            <Button onClick={handleAddEvent}>Add</Button>
          )}
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FullCalendarApp