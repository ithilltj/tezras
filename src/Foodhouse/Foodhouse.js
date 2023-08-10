import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import samsa1 from '../img/samsa.png';
import samsa2 from '../img/samsa2.png';
import cake1 from '../img/cake1.png';
import cake2 from '../img/cake2.png';
import cake3 from '../img/cake3.png';
import pirog1 from '../img/pirog1.png';
import pirog2 from '../img/pirog2.png';






function Foodhouse() {
  return (
    <>

<Container style={{marginTop:'100px'}} id='food-house'>
        <Row>
            <Col className='text-center'>
            <h2 className='orange text-uppercase'>  <span className='text-dark'>Домашные</span> выпечки </h2>
            </Col>
        </Row>

    </Container>

    <Tabs
      defaultActiveKey="food1"
      id="fill-tab-example"
      className="mb-5 mt-5"
      fill
    >

<Tab eventKey="food1" title="Торт"  >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={cake1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={cake2} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={cake3} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   


 <Tab eventKey="food2" title="Пирог"  >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'19rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={pirog1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>
    
    <Card style={{ width: '13rem',height:'19rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={pirog2} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   



 <Tab eventKey="food3" title="Самбуса"  >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'19rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={samsa1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'19rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={samsa2} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   

 </Tabs>

    </>
  )
}

export default Foodhouse