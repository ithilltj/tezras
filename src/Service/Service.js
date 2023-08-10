import React from 'react'
import './Service.css'
import { Container } from 'react-bootstrap'
import {Tabs,Tab,Card} from 'react-bootstrap'
import gazbalon from '../img/gazbalon.png'
import bazar from '../img/bazar.jpg'
import product_store from '../img/product-store.jpg'
import dostavka_tovar from '../img/DOSTAVKA-TOVAR.jpg'


function Service() {
  return (
    <>
    
    <Container id='service'>
    <h2 className='text-center mt-5'>Сервисы</h2>
    </Container>
    

    <Tabs  className='d-flex justify-content-center'>

    <Tab eventKey="service1" title="ГАЗБАЛОН" >


      <Card style={{ width:'330px',height:'320px', display:'flex',alignItems:'center' }} class='card-layout'>
      <Card.Img variant="top" src={gazbalon} style={{width:'320px',height:'200px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      </Card>
  


 </Tab>   

{/* ДОСТАВКА ПРОДУКТОВ ИЗ МАГАЗИНА */}
 <Tab eventKey="service2" title="ДОСТАВКА ПРОДУКТОВ ИЗ МАГАЗИНА" >

      <Card style={{ width:'330px',height:'320px', display:'flex',alignItems:'center' }} className='card-layout' >
      <Card.Img variant="top" src={product_store} style={{width:'320px',height:'200px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>



 </Tab>   


{/* ДОСТАВКА ПРОДУКТОВ ИЗ БАЗАРА */}
 <Tab eventKey="service3" title="ДОСТАВКА ПРОДУКТОВ ИЗ БАЗАРА" >

      <Card style={{ width:'330px',height:'320px', display:'flex',alignItems:'center' }} className='card-layout'>
      <Card.Img variant="top" src={bazar} style={{width:'320px',height:'200px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>


 </Tab>   


{/*  ДОСТАВКА ТОВАРОВ */}
 <Tab eventKey="service4" title="ДОСТАВКА ТОВАРОВ">

      <Card style={{ width:'330px',height:'320px', display:'flex', justifyContent:'center',alignItems:'center'}} className='card-layout'>
      <Card.Img variant="top" src={dostavka_tovar} style={{width:'320px',height:'200px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>



 </Tab>   

 
    </Tabs>

    

    </>
  )
}

export default Service