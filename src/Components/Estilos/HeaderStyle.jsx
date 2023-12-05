import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleHeader = styled.header`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 12vh;
 border-bottom: solid 1px #F8F8FF;
`
export const NavBar = styled.ul`
 display: flex;
 justify-content: space-around;
 width: 40vw;
`

export const NavBarLink = styled(Link)`
  color:#75e8e7;
  font-family: 'Poppins', sans-serif;
  text-transform:  uppercase;
  font-size: 16px;
  font-weight: 600;

  &:hover{
    color: white;
  }
`