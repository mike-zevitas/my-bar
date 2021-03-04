import React from 'react';

function Footer() {
  return (
      <footer className="pt-5">
        <div className="footer-container text-center">
          <p>&copy; Plan.it  {(new Date().getFullYear())}</p>
        </div>
      </footer>
  )
}

export default Footer;