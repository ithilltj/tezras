import {React,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo-tez-removebg-preview.png'
import cart from '../img/Buy.svg'
import './Header.css'

function Header() {

  let count=0;

  const [show,setShow]=useState(false)

  const showCart=()=>{
    setShow(!show);
  }

  const hiddenCart=()=>{
    setShow(!show);
  }

  return (
    <>

<Navbar  fixed='top' style={{maxHeight:'150px',height:'150px',boxSizing:'border-box',backgroundColor:'#FDE700',  zIndex:1}}  >
        
        <Container style={{display:'flex',flexDirection:'column'}}>
          <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
         
          <Nav className="mx-auto" style={{height:'40px'}}>
         
            <Nav.Link href="#home" >Главная</Nav.Link>
            <Nav.Link href="#foods">Блюда</Nav.Link>
            <Nav.Link href="#resto">Рестораны</Nav.Link>
            <Nav.Link href="#food-house">Домашние выпечки</Nav.Link>
            <Nav.Link href="#service">Сервисы</Nav.Link>
            <Nav.Link href="#contact">Контакт</Nav.Link>
            <Nav.Link href="tel:45 00">45 00</Nav.Link>
            <Nav.Link className='cart-button' onClick={showCart}><img src={cart}/> <span>{count}</span></Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    <div className={show ? 'cart-show' : 'cart-hidden'}>
 
    <div className='d-flex justify-content-between'>
    <h2>Корзина</h2>
    <button className='btn btn-danger' onClick={hiddenCart}>X</button>
    </div>

    </div>
    

    </>
  );
}

export default Header;