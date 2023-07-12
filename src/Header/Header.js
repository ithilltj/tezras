import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../img/TezRas.svg'
import cart from '../img/Buy.svg'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './Header.css'
import Menu from '../Menu/Menu';


function Header() {

  document.querySelectorAll('.offcanvas a').forEach(o=>o.addEventListener('click',()=>{

     document.querySelector('.offcanvas').offcanvas('hide')

  }))

  return (
    <>

<Navbar bg="light" data-bs-theme="light" fixed='top' >
        <Container>
          <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#foods">Блюды</Nav.Link>
            <Nav.Link href="#resto">Рестораны</Nav.Link>
            <Nav.Link href="#contact">Контакт</Nav.Link>
            <Nav.Link href="tel:+992 000440060">+992 000 440 060</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



    <Container className='pt-5 mt-5' id='home'>
    <Row className='justify-content-around mt-5' >
            
    <Col className='align-self-center col-12 col-lg-3'>
    <h1>Самая быстрая<span className='orange'> Доставка</span> <br/>
     в Бохтаре</h1>
    <p className='h4 text-success'>
   Аз хона занг занед, мо бошем бурда мерасонем.
    </p>
    
    </Col>
    <Col className="Curer col-12 col-md-12 col-lg-7 ">
    </Col>        

        </Row>
    </Container>

    <Menu>
      
    </Menu>

    

    </>
  );
}

export default Header;