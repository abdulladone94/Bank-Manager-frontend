import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

const Banks = () => {
  const [banks, setBanks] = useState([]);

  const [searchWord, setSearchWord] = useState("");
  const [searchBank, setSearchBank] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/banks")
      .then((response) => {
        setBanks(response.data);
        console.log(setBanks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!searchWord) {
      setSearchBank(banks);
    } else {
      setSearchBank(
        banks.filter((bank) => {
          return bank.bankName.toLowerCase().includes(searchWord);
        })
      );
    }
  }, [banks, searchWord]);

  return (
    <div className="container">
      <SearchBar setSearchWord={setSearchWord} />
      <h1>Banks Under CBSL</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Banks in SL</th>
          </tr>
        </thead>
        {searchBank.map((name) => {
          return (
            <tr>
              <th>{name.bankId}</th>
              <th>{name.bankName}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Banks;
