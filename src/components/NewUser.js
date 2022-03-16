import React, { useState } from "react";
import Axios from "axios";

const NewUser = () => {
  const [newUserData, setNewUserData] = useState({
    bankName: "",
    firstName: "",
    lastName: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    contactNo: "",
    nic: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((pv) => {
      return { ...pv, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/newUser", {
      firstName: newUserData.firstName,
      lastName: newUserData.lastName,
      address: newUserData.address,
      dateOfBirth: newUserData.dateOfBirth,
      gender: newUserData.gender,
      contactNo: newUserData.contactNo,
      nic: newUserData.nic,
    })
      .then((result) => {
        // console.log(res.data());
        alert("Successfully submitted");
      })
      .catch((err) => {
        console.log(err);
      });
    setNewUserData({
      bankName: "",
      firstName: "",
      lastName: "",
      address: "",
      dateOfBirth: "",
      gender: "",
      contactNo: "",
      nic: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} class="row g-4">
        <h1>Account Adding Form</h1>
        <div class="col-md-12">
          <label for="inputState" class="form-label">
            Select your Bank
          </label>
          <select
            id="inputState"
            class="form-select"
            required
            name="bankName"
            value={newUserData.bankName}
            onChange={handleChange}
          >
            <option selected></option>
            <option>Bank of Ceylon</option>
            <option>Commercial Bank</option>
            <option>Hatton National Bank</option>
            <option>Sampath Bank</option>
            <option>Seylan Bank</option>
            <option>Peoples Bank</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            First Name
          </label>
          <input
            type="text"
            required
            class="form-control"
            id="inputEmail4"
            placeholder="First Name"
            name="firstName"
            value={newUserData.firstName}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            required
            class="form-control"
            id="inputPassword4"
            placeholder="First Name"
            name="lastName"
            value={newUserData.lastName}
            onChange={handleChange}
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            required
            class="form-control"
            id="inputAddress"
            placeholder="Address"
            name="address"
            value={newUserData.address}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Date of Birht
          </label>
          <input
            type="date"
            class="form-control"
            required
            id="inputCity"
            name="dateOfBirth"
            value={newUserData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Gender
          </label>
          <select
            id="inputState"
            class="form-select"
            required
            name="gender"
            value={newUserData.gender}
            onChange={handleChange}
          >
            <option selected></option>
            <option>male</option>
            <option>Female</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputZip" class="form-label">
            Contact No
          </label>
          <input
            type="tel"
            required
            class="form-control"
            id="inputZip"
            name="contactNo"
            pattern="[0-9]{10}"
            value={newUserData.contactNo}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputZip" class="form-label">
            NIC
          </label>
          <input
            type="tel"
            required
            class="form-control"
            id="inputZip"
            pattern="[0-9]{9}[v]{1}"
            name="nic"
            value={newUserData.nic}
            onChange={handleChange}
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
