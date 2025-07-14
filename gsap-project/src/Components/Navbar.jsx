import React from 'react'
import { navLinks } from '../../Constants'

const Navbar = () => {
  return (
    <div>
        <a href='#home' className='flex items-center gap-2'> 
                <img src=''/>
            <p>Velvet Pour</p></a>
            <ul>
                {navLinks.map((link)=>{
                    <a href={`#${link.id}`}>{link.title}</a>
                })}
            </ul>
    </div>
  )
}

export default Navbar
