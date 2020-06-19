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
          <a className="nav-link" href="/"><i className="fas fa-ellipsis-h"></i></a>
        </li>
      </ul>
      <span className="navbar-text">
      <div className="input-group">
      <input className="form-control py-2 border-right-0 border" type="text" value="search" id="example-search-input"/>
      <span className="input-group-append">
          <div className="input-group-text bg-transparent"><i className="fa fa-search"></i></div>
      </span>
  </div>
      </span>
    </div>
  </nav>
    </div>
  )
}

export default MainNav;
