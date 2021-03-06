import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuDate } from "../data/MenuData";
import Button from "./Button" 
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
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
    font-style: italic;
`
const MenuBars = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        height: 40px;
        width: 40px;
        curser: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color: white;
    }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const NavMenuList = styled(Link)`
    ${NavLink}
`
const Navbtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

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
                <Button to="/contact" primary="true" >
                    Contact Us
                </Button>
            </Navbtn>
        </Nav>
    )
}

export default Navbar
