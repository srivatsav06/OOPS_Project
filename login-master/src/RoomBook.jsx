import React, { Component, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './Navbar.jsx' 
import { Menu, Segment , Dropdown,Icon} from 'semantic-ui-react'
import TimePicker from 'react-time-picker';

const friendOptions = [
    {
      key: 'Block A',
      text: 'Block A',
      value: 'Block A',
    },
    {
      key: 'Block B',
      text: 'Block B',
      value: 'Block B',
    },
    {
      key: 'Block C',
      text: 'Block C',
      value: 'Block C',
    }
  ]
  const friendOptions1 = [
    {
      key: 'Room 1',
      text: 'Room 1',
      value: 'Room 1',
    },
    {
      key: 'Room 2',
      text: 'Room 2',
      value: 'Room 2',
    },
    {
      key: 'Room 3',
      text: 'Room 3',
      value: 'Room 3',
    }
  ]
function RoomBook() {
    
  
    const [startDate, setStartDate] = useState(null);
  
    const handleChange = date => {
      setStartDate(date);
    };
  
    const handleSearch = () => {
      // Perform search action with startDate
    };
    const [time, setTime] = useState('10:00');

  function onChange(newTime) {
    setTime(newTime);
  }
  
    return (
      <div>
      <Navbar/>
      <div className='book'>
    <Dropdown
      placeholder='Enter Name of The Block'
      closeOnEscape
      selection
      options={friendOptions}
    />
    </div>
    <div className='book1'>
    <Dropdown
      placeholder='Enter Name of The Room'
      closeOnEscape={false}
      selection
      options={friendOptions1}
    />
  </div>
  <DatePicker className='' 
          selected={startDate}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select date"
        />
        <TimePicker
      onChange={onChange}
      value={time}
    />
      </div>
 
    )
  }
export default RoomBook