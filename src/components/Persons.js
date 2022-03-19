import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

const Persons = () => {
  const [personsInfor, setPersonsInfor] = useState([]);

  const [searchWord, setSearchWord] = useState("");
  const [searchPerson, setSearchPerson] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/persons")
      .then((response) => {
        setPersonsInfor(response.data);
        console.log(setPersonsInfor);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!searchWord) {
      setSearchPerson(personsInfor);
    } else {
      setSearchPerson(
        personsInfor.filter((psn) => {
          return psn.firstName.toLowerCase().includes(searchWord);
        })
      );
    }
  }, [personsInfor, searchWord]);

  return (
    <div className="container">
      <SearchBar setSearchWord={setSearchWord} />
      <h1>Client Information</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">firstName</th>
            <th scope="col">lasttName</th>
            <th scope="col">address</th>
            <th scope="col">dateOfBirth</th>
            <th scope="col">gender</th>
            <th scope="col">contactNo</th>
            <th scope="col">NIC</th>
          </tr>
        </thead>
        {searchPerson.map((person) => {
          return (
            <tr>
              <th>{person.personId}</th>
              <th>{person.firstName}</th>
              <th>{person.lastName}</th>
              <th>{person.address}</th>
              <th>{person.dateOfBirth}</th>
              <th>{person.gender}</th>
              <th>{person.contactNo}</th>
              <th>{person.nic}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Persons;
