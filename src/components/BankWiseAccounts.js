import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

const BankWiseAccounts = () => {
  const [bankWiseAcc, setBankWiseAcc] = useState([]);

  const [searchWord, setSearchWord] = useState("");
  const [searchPerson, setSearchPerson] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/bankWiseAccounts")
      .then((response) => {
        setBankWiseAcc(response.data);
        console.log(setBankWiseAcc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!searchWord) {
      setSearchPerson(bankWiseAcc);
    } else {
      setSearchPerson(
        bankWiseAcc.filter((psn) => {
          return psn.firstName.toLowerCase().includes(searchWord);
        })
      );
    }
  }, [bankWiseAcc, searchWord]);

  return (
    <div className="container">
      <SearchBar setSearchWord={setSearchWord} />
      <h1>Bank wise Accounts</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">bankName</th>
            <th scope="col">firstName</th>
            <th scope="col">lasttName</th>
            <th scope="col">address</th>
            <th scope="col">dateOfBirth</th>
            <th scope="col">gender</th>
            <th scope="col">contactNo</th>
            <th scope="col">NIC</th>
          </tr>
        </thead>
        {searchPerson.map((account) => {
          return (
            <tr>
              <th>{account.userId}</th>
              <th>{account.bankName}</th>
              <th>{account.firstName}</th>
              <th>{account.lastName}</th>
              <th>{account.address}</th>
              <th>{account.dateOfBirth}</th>
              <th>{account.gender}</th>
              <th>{account.contactNo}</th>
              <th>{account.nic}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default BankWiseAccounts;
