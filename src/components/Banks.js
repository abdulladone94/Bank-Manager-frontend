import React, { useEffect, useState } from "react";
import Axios from "axios";

const Banks = () => {
  const [banks, setBanks] = useState([]);

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

  return (
    <div className="container">
      <h1>Banks Under CBSL</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Banks in SL</th>
          </tr>
        </thead>
        {banks.map((name) => {
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
