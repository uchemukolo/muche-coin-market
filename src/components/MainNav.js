import React from 'react';
import './styles.css';

function MainNav() {
  return (
    <div className="container-fluid border">
    <nav className="container navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand" href="/"><img src={require('../assets/MCM.png')} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Rankings <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Tools</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/"><i class="fas fa-ellipsis-h"></i></a>
        </li>
      </ul>
      <span className="navbar-text">
      <div class="input-group">
      <input class="form-control py-2 border-right-0 border" type="text" value="search" id="example-search-input"/>
      <span class="input-group-append">
          <div class="input-group-text bg-transparent"><i class="fa fa-search"></i></div>
      </span>
  </div>
      </span>
    </div>
  </nav>
    </div>
  )
}

export default MainNav;
