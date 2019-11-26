import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pearl-jam">Pearl Jam</Link>
        </li>
        <li>
          <Link to="/red-hot-chili-peppers">Red Hot Chili Peppers</Link>
        </li>
        <li>
          <Link to="/everclear">Everclear</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
