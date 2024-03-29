import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='menuIcon'>
        <ul className='nav'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar