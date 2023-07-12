import React from 'react'
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/TezRas.svg'
import location from '../img/Location.svg'
import calling from '../img/Calling.svg'
import message from '../img/Message.svg'




import './Footer.css'


function Footer() {
  return (
    <div className='bg-body-tertiary'>

    <Container style={{marginTop:'100px', backgroundColor:'tertiary',marginLeft:'0',marginRight:'0',}} id='contact' >
        <Row>
    <Col>

    <Nav.Link><img  src={logo}/></Nav.Link>
    
    </Col>

    <Col>
    <h2>Контакт</h2>
    <div>
     <img src={location} alt='location'/> <span>Бохтар</span>   
    </div>

    <div>
     <img src={calling} /> <span>+992 000 440 060</span>   
    </div>

    <div>
     <img src={message} /> <span>it.hill.tj@gmail.com</span>   
    </div>
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