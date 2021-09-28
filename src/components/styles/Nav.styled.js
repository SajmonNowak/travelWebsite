import styled from "styled-components";
import { Link } from "gatsby";
import { GoThreeBars } from "react-icons/go";

export const Nav = styled.nav`
  position: relative;
  background: transparent;
  width: 100vw;
  height: 80px;
  padding: 0.5rem;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    color: white;
    padding: 0 1rem;
    text-decoration: none;
    cursor: pointer;
    
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 780px){
        display:none;
    }
    
`;

export const Bars = styled(GoThreeBars)`
  display: none;
  margin-right: 50px;

    @media screen and (max-width: 780px){
        color: white;
        display: block;
        position: absolute;
        font-size: 2rem;
        position: absolute;
        right: 0px;
        margin-right: 20px;
        background-color: black;
        cursor: pointer;
    }

`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 780px){
      display: none;
  }
`;
