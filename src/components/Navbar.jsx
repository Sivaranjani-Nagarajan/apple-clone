import { useState } from 'react'
import {FaApple, FaSearch, FaShoppingBag, FaBars} from "react-icons/fa"



const navLink = [
    {
        icon: <FaApple />,
        href: "#"
    },

    {
        name: "Store",
        href: "#", 
    },

        {
        name: "Mac",
        href: "#", 
    },

    {
        name: "iPad",
        href: "#", 
    },

    {
        name: "iPhone",
        href: "#", 
    },

    {
        name: "Watch",
        href: "#", 
    },

    {
        name: "AirPods",
        href: "#", 
    },

    {
        name: "TV & Home",
        href: "#", 
    },

    {
        name: "Entertainment",
        href: "#", 
    },

    {
        name: "Accessories",
        href: "#", 
    },

    {
        name: "Support",
        href: "#", 
    },

    {
        icon: <FaSearch />,
        href: "#" 
    },

    {
        icon: <FaShoppingBag />,
        href: "#" 
    },

    {
        icon: <FaBars />,
        href: "#" 
    },

]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='w-full'>
      {/* Top Banner */}
      <p className='bg-gray-100 p-2 pl-4 text-sm text-center md:text-left'>
        Education Store Home | Exit
      </p>

      {/* Navbar Container */}
      <div className='bg-gray-50 px-4 py-3 flex justify-between items-center md:justify-center'>
        {/* Mobile Left Section */}
        <div className='md:hidden'>
          <FaApple size={20} />
        </div>

        {/* Desktop Links */}
        <ul className='hidden md:flex items-center gap-10'>
          <li><a href="#"><FaApple /></a></li>
          {navLink.map((link, index) => (
            <li key={index}><a href={link.href}>{link.name}</a></li>
          ))}
          <li><a href="#"><FaSearch /></a></li>
          <li><a href="#"><FaShoppingBag /></a></li>
        </ul>

        {/* Mobile Right Icons */}
        <div className='md:hidden flex items-center gap-4'>
          <FaSearch size={18} />
          <FaShoppingBag size={18} />
          <FaBars size={20} onClick={() => setIsOpen(!isOpen)} className='cursor-pointer' />
        </div>
      </div>

      {/* Optional: Mobile Dropdown Menu */}
      {isOpen && (
        <ul className='md:hidden bg-gray-100 p-4 space-y-2'>
          {navLink.map((link, index) => (
            <li key={index}><a href={link.href}>{link.name}</a></li>
          ))}
        </ul>
      )}

      {/* Offer Message */}
      <p className='p-4 text-center text-sm'>
        Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.{' '}
        <a href="#" className='text-blue-600 underline'>Shop</a>
      </p>
    </header>
  )
}

export default Navbar;