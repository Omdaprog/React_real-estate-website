import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuDate } from "../data/MenuData";
import Button from "../components/Button" 

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #000;
`
const NavLink = css`
    color: #fff;
    display:flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: static;
`
const MenuBars = styled.i``
const NavMenu = styled.div`
    display: flex;
    align-items: center;
`
const NavMenuList = styled(Link)`
    ${NavLink}
`
const Navbtn = styled.div``;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/" >ELIXR</Logo>
            <MenuBars />
            <NavMenu>
                {menuDate.map((item,index) => (
                    <NavMenuList to={item.link} key={index}>
                        {item.title}
                    </NavMenuList>
                ))}
            </NavMenu>
            <Navbtn>
                <Button to="/contact">
                    Contact Us
                </Button>
            </Navbtn>
        </Nav>
    )
}

export default Navbar
