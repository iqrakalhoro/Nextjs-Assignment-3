import React from 'react'
import Link from 'next/link'


const Header: React.FC = () => {
  return (
    <div>
        <nav>
            
    <ul className="navlist">
        <li><Link href="/" target="_parent">Home</Link></li>
        <li><Link href="/about" target="_blank">About</Link></li>
        <li><Link href="/skills" target="_blank">Skills</Link></li>
        <li><Link href="/services" target="_blank">Services</Link></li>
    </ul>
  
        </nav>
    </div>
  )
}

export default Header