import { createSignal } from "solid-js";
import norwoodLogo from "../../public/assets/pictures/NA-nobackground.png";

import "./navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand py-2" href="/">
          <img src={norwoodLogo} class="na-logo-nav" alt="Norwood Associates logo" />
        </a>
        <button class="navbar-toggler nav-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/services">Services</a>
            <a class="nav-link" href="/clients">Clients</a>
            <a class="nav-link" href="/news">News</a>
            <a class="nav-link" href="/team">Team</a>
            <a class="nav-link" href="https://www.linkedin.com/company/norwood-associates/" target="_blank" alt="Norwood Associates' LinkedIn"><i class="bi bi-linkedin" ></i></a>
            <a class="nav-link" href="mailto:info@nalobby.net" target="_blank" alt="Email Norwood Associates"><i class="bi bi-envelope-fill" ></i></a>
            
          </div>
        </div>
      </div>
    </nav>
  );
}