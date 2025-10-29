import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Layout({ children }) {
  return (
    <>
      <header style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={logo} alt="logo" style={{ width: 48, height: 48 }} />
        <h1 style={{ margin: 0 }}>My Portfolio</h1>
        <nav style={{ marginLeft: 'auto', fontSize: '1.05rem' }}>
          <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{' '}
          <NavLink to="/projects">Projects</NavLink> | <NavLink to="/education">Education</NavLink> |{' '}
          <NavLink to="/services">Services</NavLink> | <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main style={{ padding: '1rem' }}>{children}</main>
    </>
  )
}
