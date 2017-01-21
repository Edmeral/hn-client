import React from 'react'
import { Link } from 'react-router' 

const Navbar = () => (
  <div>
    <Link to="/top">Top</Link>
    <Link to="/new">New</Link>
    <Link to="/jobs">Jobs</Link>
  </div>
)

export default Navbar