import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBar() {
    const [email, setEmail] = useState(null);
  
   function handleSearch()
   {
      const mailid=document.querySelector("#mail");
      
   }
  
    
  
   
     return  <div className='SearchBar'>
       <div ><input id='mail' className='SearchInput' 
          
        /></div>
       <div ><button className='SearchButton' onClick={handleSearch}>Search</button></div>
     </div> ;
  }
  
export default SearchBar;