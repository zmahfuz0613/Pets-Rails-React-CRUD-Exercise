import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/cats'>Cats</Link>
      <Link to='/dogs'>Dogs</Link>
    </header>
  )
}
