import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

// import logo from '../assets/images/logo.webp';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <section>

            <div className="container home-container py-5">
              <h1 className="h1">Welcome To My Bar</h1>
              <p className="subtitle">The Place to Track your Drinks</p>
              {auth().currentUser
            ?<div></div> 
            :<div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                <Link className="btn btn-secondary px-5" to="/login">Login to Your Account</Link>
              </div>
            }
            </div>
        </section>
      </div>
    )
  }
}