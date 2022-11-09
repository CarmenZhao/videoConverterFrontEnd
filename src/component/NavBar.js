import React from "react";
import logo from "../img/meowlogo.png";

export default function NavBar() {
  return (
    <nav class="px-5 navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand">
        <img
          src={logo}
          width="250"
          class="d-inline-block align-top"
          alt=""
        ></img>
      </a>
      <div class="" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active">Process file</a>
          <a class="nav-item nav-link">About</a>
        </div>
      </div>
    </nav>
  );
}
