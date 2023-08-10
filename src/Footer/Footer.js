import React from 'react'
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo-tez-removebg-preview.png'
import location from '../img/Location.svg'
import calling from '../img/Calling.svg'
import message from '../img/Message.svg'
import instalogo from '../img/insta-icon.png'





import './Footer.css'


function Footer() {
  return (
    <div className='bg-body-tertiary'>

    <Container style={{marginTop:'100px', backgroundColor:'tertiary',marginLeft:'0',marginRight:'0',}} id='contact' >
        <Row>
    <Col>

    <Nav.Link><img  src={logo} alt='logo'/></Nav.Link>
    
    </Col>

    <Col>
    <h4>Контакт</h4>
    <div>
     <img src={location} alt='location'/> <span>Бохтар</span>   
    </div>

    <div>
     <img src={calling} alt='call'/> <span>+992 000 440 060</span>   
    </div>

    <div>
     <img src={message} alt='message'/> <span>it.hill.tj@gmail.com</span>   
    </div>
    </Col>

    <Col>
    <div>
      <h4>Мы в социальных сетях</h4>
    </div>
     <Nav.Link href='https://www.instagram.com/tezras_bokhtar'><img  src={instalogo} width={40}/> </Nav.Link>
    </Col>
        </Row>

        <Row>
      <Col>
      <p>© 2023 TezRas - ДОСТАВКА. Все права защищены. </p>
      </Col>
        </Row>
    </Container>
    
    </div>
  )
}

export default Footer