import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div class="card text-center">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Welcome to Bank Manager</h5>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="button">
            Banks Under CBSL
          </button>
          <button class="btn btn-primary" type="button">
            Persons
          </button>
          <button class="btn btn-primary" type="button">
            Users with Bank Account
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
