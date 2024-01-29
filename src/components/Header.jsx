import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"
import styled from "styled-components"

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className="logo"/>
      </NavLink>
      <Navbar/>
    </MainHeader>
  )
}
const MainHeader=styled.header`
  padding:0 4.5rem;
  height:8rem;
  display:flex;
  justify-content:space-between;
  background-color:${({theme})=>theme.colors.bg};
  .logo{
    height:3rem;
  }
  
  
`

export default Header