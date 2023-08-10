import React from 'react'
import './Top.css'
import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import burger1 from '../img/top-burger.png';
import pizza from '../img/top-pizza.png';
import plov from '../img/plovv-top.png'
import qurutob from '../img/top-qurutab.png'
import salad from '../img/salad.png'
import hotdog from '../img/hotdog.png'
import hotdog2 from '../img/nacho-dog.png'

import shaurma from '../img/shaurma.png'

function Top() {
  return (
    <>
    <h2 className='text-center mt-5 mb-5'>ЛУЧШИЕ <span className='orange'>БЛЮДА</span></h2>
    <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'center',gap:'30px'}}  fluid>

    <Card style={{ width: '300px',height:'400', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          American Burger
        </Card.Title>
      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '300px',height:'400', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={pizza} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          ПИЦЦА МАРГАРИТА
        </Card.Title>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '300px',height:'400', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={salad} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          САЛАТ "1001 ШАБ"
        </Card.Title>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '300px',height:'400', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          ОШИ 1Х1
        </Card.Title>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '300px',height:'400', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={qurutob} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          КУРУТАБ
        </Card.Title>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '300px',height:'400', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={shaurma} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          ШАУРМА
        </Card.Title>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '300px',height:'400', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={hotdog} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          ХОТ-ДОГ НАЧО
        </Card.Title>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '300px',height:'400', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={hotdog2} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='text-center'>
          ХОТ-ДОГ НАЧО
        </Card.Title>

      </Card.Body>
      
      
    </Card>
    
        

    </Container>
    </>
  )
}

export default Top