import React from 'react'
import './Resto.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import burger1 from '../img/item_01-480x480 1.png';
import plov1 from '../img/блюда_DoV (6).png'
import plov2 from '../img/1642364003_7-papik-pro-p-plov-klipart-8.png'


function Resto() {
  return (
   <>
   <Container style={{marginTop:'100px'}} id='resto'>
        <Row>
            <Col className='text-center'>
            <h2 className='orange text-uppercase'>  Рестораны <span className='text-dark'>и</span> кафе </h2>
            </Col>
        </Row>
    </Container>

    <Tabs
      defaultActiveKey="res1"
      id="fill-tab-example"
      className="mb-5 mt-5"
      fill
    >

<Tab eventKey="res1" title="БУРГЕР"  >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   

 <Tab eventKey="res2" title="БАРОДАРОН" >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   


{/* Duston */}
 <Tab eventKey="res3" title="ДУСТОН"  >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov1}  style={{width:'144px',height:'144px', marginTop:'5px'}}/>
      <Card.Body>
       
        <Card.Text>
          Оши 10x1
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>РОЙГОН</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
    </Card>

    

  </Container>  


 </Tab>   


 <Tab eventKey="res4" title="M-CAFE" >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   

 <Tab eventKey="res5" title="LA BOTTEGA" >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   


 <Tab eventKey="res6" title="ПРИСТИЖ" >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov1}  style={{width:'144px',height:'144px', marginTop:'5px'}}/>
      <Card.Body>
       
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov2}  style={{width:'144px',height:'144px', marginTop:'15px'}}/>
      <Card.Body>
        
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
     
    </Card>

  </Container>  


 </Tab>   





    </Tabs>

   </>
  )
}

export default Resto