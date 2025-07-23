import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='container-fluid shadow mt-5'>
      <footer className="bg-white text-dark text-center p-3">
        <p className="mb-0">© 2023 Your Company Name. All rights reserved.</p>
        <p className="mb-0">Follow us on:</p>
        <ul className="list-inline">
          <li className="list-inline-item p-1 ">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FaFacebook />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FaTwitter /> 
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    </>
  );
}
