import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Portal extends Component {
  render() {
    return (
      <div className="home">
        <section>
            <div className="container home-container py-5">
              <h1 className="h1">My Portal</h1>
              <p className="subtitle">My Drinks</p>

            </div>
        </section>
      </div>
    )
  }
}