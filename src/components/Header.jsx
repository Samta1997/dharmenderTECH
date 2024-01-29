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
  padding:0 4.8rem;
  height:10rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:${({theme})=>theme.colors.bg};
  .logo{
    height:auto;
    max-width:30%;
  }
  
  
`

export default Header