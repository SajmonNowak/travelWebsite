import React from 'react'
import { Bars, Nav, NavBtn, NavLink, NavMenu } from './styles/Nav.styled'
import menuData from '../data/menuData'
import { Button } from './styles/Button.styled'

const Header = () => {
    return (
        <Nav>
            <NavLink to="/">Travely</NavLink>
            <NavMenu>
                {menuData.map((item, index) =>(
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>
                ) )}
            </NavMenu>
            <Bars />
            <NavBtn>
                <Button primary="true" round="true" to="">Book a Trip</Button>
            </NavBtn>
        </Nav>
    )
}

export default Header
