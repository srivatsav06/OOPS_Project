import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx"
import SearchBar from "./SearchBar";
import SearchTable from "./SearchTable.jsx";
import Trial2 from "./trial2.jsx";
import Trial from "./trial.jsx"
import axios from "axios"

function SearchFinal(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/users/all")
      .then((response) => {
        console.log(response.data);
        const users = response.data.map((user) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            events: user.events
          };
        });
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    const [email, setEmail] = useState(null);
  
   function handleSearch()
   {
      const mailid=document.querySelector("#mail").value;
      console.log("rdfguhij");
      console.log(mailid);
      axios
        .get("http://localhost:8081/users/email/"+mailid)
        .then((response) => {
            console.log(response.data);
            if(response.status==200){
                console.log(response.data);
                const res = [{
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password,
                    role: response.data.role,
                    events: response.data.events
                }];
            setUsers(res);
            }
            if(response.status==201){
              console.log("notsuccess");
              alert("user does not exist");
            }
      
          })
            .catch((error) => {
                alert("no results found")
              console.log(error);
            });
   }
  return (
    <div>
      <Navbar />
      <div className="SearchPage">
      <div className='SearchBar'>
       <div ><input type = "text" id='mail' className='SearchInput' 
          
        /></div>
       <div ><button className='SearchButton' onClick={handleSearch}>Search</button></div>
     </div> 
      </div>
      <div className="SearchResults">
        <SearchTable users={users} />
      </div>
    </div>
  );
}

export default SearchFinal;
