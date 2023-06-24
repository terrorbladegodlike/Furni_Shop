import React, {useState, useEffect} from 'react'

// Import Logo
import Logo from '../assets/img/logo.svg'

// import Icons
import {CgMenuRight, CgClose} from 'react-icons/cg'

// import data
import {navigation} from '../data'

// import component
import NavMobile from '../components/NavMobile'

const Header = () => {

  const [bg, setBg] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })

  return (
    <header className={`${bg ? 'bg-primary py-4 lg:py-6' : 'bg-none'} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="#!">
            <img className='h-6 lg:h-8' src={Logo} alt="logo" />
          </a>
          {/* Menu icon */}
          <div onClick={() => setMobileNav(!mobileNav)} className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'>
            {mobileNav ? <CgClose/> : <CgMenuRight/>}
          </div>
          {/* Nav */}
          <nav className='hidden md:flex'> 
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((item, index) => {
                return(
                  <li key={index}>
                    <a href={item.href} className='capitalize text-white hover:border-b transition-all'>{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
          {/* Nav Mobile */}
          <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
            <NavMobile/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header