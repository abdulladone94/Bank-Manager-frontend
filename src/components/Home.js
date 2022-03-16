import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div class="card text-center">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">Welcome to Bank Manager</h5>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            class="btn btn-primary"
            type="button"
            onClick={() => {
              navigate("/banks");
            }}
          >
            Banks Under CBSL
          </button>
          <button
            class="btn btn-primary"
            type="button"
            onClick={() => {
              navigate("/persons");
            }}
          >
            Persons
          </button>
          <button
            class="btn btn-primary"
            type="button"
            onClick={() => {
              navigate("/bankWiseAccounts");
            }}
          >
            Bank wise Accounts
          </button>
          <button
            class="btn btn-primary"
            type="button"
            onClick={() => navigate("/newUser")}
          >
            Enter New user
          </button>
        </div>
      </div>
      <div class="card-footer text-muted">Private and Confidential</div>
    </div>
  );
};

export default Home;
