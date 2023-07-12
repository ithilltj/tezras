import React from 'react'
import './Top.css'
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import burger1 from '../img/item_01-480x480 1.png';

function Top() {
  return (
    <>
    <h2 className='text-center mt-5 mb-5'>ЛУЧШИЕ <span className='orange'>БЛЮДЫ</span></h2>
    <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'center',gap:'30px'}}>

    <Card style={{ width: '360px',height:'400', display:'flex',alignItems:'center',borderRadius:'60px 5px 0 0' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          American Burger
        </Card.Title>
      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '360px',height:'400', display:'flex',alignItems:'center',borderRadius:'60px 5px 0 0' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          American Burger
        </Card.Title>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '360px',height:'400', display:'flex',alignItems:'center',borderRadius:'60px 5px 0 0' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          American Burger
        </Card.Title>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '360px',height:'400', display:'flex',alignItems:'center',borderRadius:'60px 5px 0 0' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          American Burger
        </Card.Title>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '360px',height:'400', display:'flex',alignItems:'center',borderRadius:'60px 5px 0 0' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          American Burger
        </Card.Title>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '360px',height:'400', display:'flex',alignItems:'center',borderRadius:'60px 5px 0 0' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          American Burger
        </Card.Title>

      </Card.Body>
      
      
    </Card>
    
        

    </Container>
    </>
  )
}

export default Top