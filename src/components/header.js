import React from 'react';
import Logo from '../assets/schoollogo.png'
import { Container, Navbar, NavDropdown, Nav, Button}  from 'react-bootstrap'

let french = localStorage.getItem('language') == 'FR'


export default function Header({ onBurgerClicked }) {
    return (
        <div className={`flex  flex-row space-x-4 items-center md:px-16 px-8 py-2  w-full  top-0 z-50 header-background `}>
            {/* <img src={Logo} className="md:h-20 md:w-20 h-14 w-14" alt="Ecole international de kigali"/>
            <p className="hidden md:block md:text-4xl text-green-700 ">École Internationale De Kigali</p>
           
            <div className="flex space-x-4 absolute right-10">
           <img className="h-10 w-10 cursor-pointer" onClick={()=>{
      localStorage.setItem('language', 'FR')
      window.location.reload()
  }}
  alt="United States"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
  <img   onClick={()=>{
      localStorage.setItem('language', 'EN')
      window.location.reload()
  }}
  alt="United States"
  className="h-10 w-10 cursor-pointer"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
  <svg onClick={()=>{
                onBurgerClicked();
                console.log('Burger Clicked')
            }} xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:hidden " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
           </div> */}
         <Navbar  expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">
    <img src={Logo} className="md:h-20 md:w-20 h-14 w-14" alt="Ecole international de kigali"/>
    
    </Navbar.Brand>

    <Navbar.Collapse id="navbar-dark-example" className='float-right hidden'>
      <Nav>
          <Nav.Link href="/">{french ? "Accueil":"Home"}</Nav.Link>
          
        <NavDropdown
          title={french ? "À propos":"About"} 
        >
          <NavDropdown.Item href="whoweare">{french ? "Qui nous sommes":"Who we are"}</NavDropdown.Item>
          <NavDropdown.Item href="missionandvision">{french ? "Mission et vision":"Mission and vision"}</NavDropdown.Item>
          <NavDropdown.Item href="hoswelcome">{french ? "Accueil du chef d'établissement":"Head of School welcome"}</NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
     
        <NavDropdown
          title={french ? "Stratégie":"Strategy"}
        >
          <NavDropdown.Item href="dutiesofparents">{french ? "Les devoirs des parents":"Duties of parents"}</NavDropdown.Item>
          <NavDropdown.Item href="dutiesofstudents">{french ? "Les devoirs des étudiants":"Duties of Students"}</NavDropdown.Item>
          <NavDropdown.Item href="dutiesofteachers">{french ? "Devoirs des enseignants":"Duties of Teachers"}</NavDropdown.Item>
       
        </NavDropdown>
        <Nav.Link href='portal'>Portal</Nav.Link>
        <Nav.Link href="facilities">{french ? "Installations scolaires":"School Facilities"}</Nav.Link>
        <Nav.Link href="news">{french ? "Nouvelles et Evènements":"News and events"}</Nav.Link>
        <Nav.Link href="contact">{french ? "Nous contacter":"Contact Us"}</Nav.Link>
      </Nav>
      <img className="h-10 w-10 cursor-pointer" onClick={()=>{
      localStorage.setItem('language', 'FR')
      window.location.reload()
  }}
  alt="United States"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
  <img   onClick={()=>{
      localStorage.setItem('language', 'EN')
      window.location.reload()
  }}
  alt="United States"
  className="h-10 w-10 cursor-pointer ml-4"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>

    </Navbar.Collapse>
  </Container>
</Navbar>
        
        
        </div>
    )
}
