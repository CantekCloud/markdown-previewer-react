import react from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import { styled, css } from 'styled-components';
//import { FaEnvelope, FaLinkedIn } from 'react-icons/fa';


import './Navbar.css';

const Button = styled.a`
    color: red;

    background: red;
    border-radius: 15px;
    border: 1px solid red;
    color: white;
    display: inline-block;
    margin: 0.5rem 1rem;
    padding: 0.5rem 0;
    transition: all 200ms ease-in-out;
    width: 11rem;
    text-decoration: none;
    text-align:center;
    font-family: Lucida Console;
    font-weight: 900;
    align-content: flex-end;
    z-index: 4;
   

  &:hover {
    filter: brightness(0.75);
    color: pink;
  }



`

const NavigationBar = () => {
    return (
        <div className="Navbar">
            <Nav className="navbar navbar-expand-md ">
                <div className="brand">
                    <NavItem>Markdown.io</NavItem>
                </div>
                
                <NavItem>
                    <div className="space"></div>
                </NavItem>
                <NavItem className="item">Made by Mohammed Qasim Khan</NavItem>
                <NavItem className="item2">
                    <Button href="https://www.github.com/QasimAK191" target="_blank"><b>Github</b></Button>
                    <Button href="mailto:mohammedqasim.a.khan@gmail.com" target="_blank"><b>Contact Me</b></Button>
                </NavItem>
            </Nav>
        </div>
)}

export default NavigationBar;