import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>Pets App</h1>
      </Link>
      <hr />
      <div className='nav-links'>
        <Link to='/cats'>Cats</Link>
        <Link to='/dogs'>Dogs</Link>
      </div>
    </header>
  )
}
