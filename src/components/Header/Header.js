import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebase';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link className="navbar-brand nav-link" to="/">My Digital Bar</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/portal">Profile</Link>
              <button className="btn nav-link mr-3" onClick={() => auth().signOut()}>Logout</button>
            </div>
            : <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
              <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;