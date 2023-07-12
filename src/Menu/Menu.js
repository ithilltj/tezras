import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import burger1 from '../img/item_01-480x480 1.png';
import burger2 from '../img/item_01-480x480 2.png';
import burger3 from '../img/item_01-480x480 3.png';
import burger4 from '../img/item_01-480x480 4.png';
import pizza1 from '../img/pizza1.PNG'
import pizza2 from '../img/pizza2.PNG'
import pizza3 from '../img/pizza3.PNG'
import pizza4 from '../img/pizza4.PNG'
import sandwich1 from '../img/sandwich1.PNG'
import sandwich2 from '../img/sandwich2.PNG'
import sandwich3 from '../img/sandwich3.PNG'
import sandwich4 from '../img/sandwich4.PNG'
import plov1 from '../img/блюда_DoV (6).png'
import plov2 from '../img/1642364003_7-papik-pro-p-plov-klipart-8.png'
import qurutab from '../img/Tajikistan-2019-1445_new-removebg-preview.png'

import './Menu.css'
import Resto from '../Resto/Resto';

function Filters() {
  return (
<>
    <Container style={{marginTop:'100px'}} id='foods'>
        <Row>
            <Col className='text-center'>
            <h2 className='text-uppercase'>Наши <span className='orange'> блюды</span> </h2>
            </Col>
        </Row>
    </Container>




    <Tabs
      defaultActiveKey="burger"
      id="fill-tab-example"
      className="mb-3 mt-5"
      fill
    >


        
        { /*  Burger  */  }

      <Tab eventKey="burger" title="Бургеры" >
      <Container style={{  display:'flex' ,justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center', }} >
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
      <Card.Img variant="top" src={burger2}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Text >
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
      <Card.Img variant="top" src={burger3}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Text >
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
      <Card.Img variant="top" src={burger4} style={{width:'144px',height:'144px'}} />
      <Card.Body>
        <Card.Text style={{fontSize:'15px'}}>
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>


      </Card.Body>
      
      
    </Card>
      </Container>
     </Tab>

     { /* Pizza */  }

      <Tab eventKey="pizza" title="Пицца">
      <Container className='d-flex justify-content-center align-items-center text-center' style={{flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={pizza1}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={pizza2}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={pizza3}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={pizza4}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
      
    </Card>
      </Container>
      </Tab>



      { /* Sandwich */  }

      <Tab eventKey="longer-tab" title="Сэндвич">
         <Container className='d-flex justify-content-center align-items-center text-center'  style={{flexWrap:'wrap',gap:'10px'}}>
         <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={sandwich1}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={sandwich2}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
     
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={sandwich3}  style={{width:'144px',height:'144px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }} >
      <Card.Img variant="top" src={sandwich4}  style={{width:'144px',height:'144px'}}/>
      <Card.Body >
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
      
    </Card>
         </Container>
      </Tab>



    { /* Plov  */ }


      <Tab eventKey="plov" title="Плов">
         <Container className='d-flex justify-content-center align-items-center text-center'  style={{flexWrap:'wrap',gap:'10px'}}>
         <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov1}  style={{width:'144px',height:'144px', marginTop:'5px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov2}  style={{width:'144px',height:'144px', marginTop:'15px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
     
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov1}  style={{width:'144px',height:'144px', marginTop:'5px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }} >
      <Card.Img variant="top" src={plov2}  style={{width:'144px',height:'144px', marginTop:'5px'}}/>
      <Card.Body >
        <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Link href='tel:000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
      
    </Card>
         </Container>
      </Tab>




      { /* Qurutab */ }


<Tab eventKey="qurutab" title="Курутаб">
   <Container className='d-flex justify-content-center align-items-center text-center'  style={{flexWrap:'wrap',gap:'10px'}}>
   <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
<Card.Img variant="top" src={qurutab}  style={{width:'144px',height:'144px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
  <Card.Text>
    Some quick
  </Card.Text>

  <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

</Card.Body>

</Card>

<Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
<Card.Img variant="top" src={qurutab}  style={{width:'144px',height:'144px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
  <Card.Text>
    Some quick
  </Card.Text>

  <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

</Card.Body>


</Card>

<Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
<Card.Img variant="top" src={qurutab}  style={{width:'144px',height:'144px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
  <Card.Text>
    Some quick
  </Card.Text>

  <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

</Card.Body>


</Card>

<Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }} >
<Card.Img variant="top" src={qurutab}  style={{width:'144px',height:'144px'}}/>
<Card.Body >
  <Card.Title style={{fontSize:'15px'}}>Бепул</Card.Title>
  <Card.Text>
    Some quick
  </Card.Text>

  <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

</Card.Body>


</Card>
   </Container>
</Tab>


{ /* Салаты */ }


<Tab eventKey="salat" title="Салаты" id='salat'>
   <Container className='d-flex justify-content-center align-items-center text-center'  style={{flexWrap:'wrap',gap:'10px'}}>
   <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
<Card.Img variant="top" src={qurutab}  style={{width:'144px',height:'144px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
  <Card.Text>
    Some quick
  </Card.Text>

  <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

</Card.Body>

</Card>

<Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
<Card.Img variant="top" src={qurutab}  style={{width:'144px',height:'144px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
  <Card.Text>
    Some quick
  </Card.Text>

  <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

</Card.Body>


</Card>

<Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
<Card.Img variant="top" src={qurutab}  style={{width:'144px',height:'144px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px'}}>25 TJS</Card.Title>
  <Card.Text>
    Some quick
  </Card.Text>

  <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

</Card.Body>


</Card>

<Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }} >
<Card.Img variant="top" src={qurutab}  style={{width:'144px',height:'144px'}}/>
<Card.Body >
  <Card.Title style={{fontSize:'15px'}}>Бепул</Card.Title>
  <Card.Text>
    Some quick
  </Card.Text>

  <Card.Link href='#'> <button className='cart'>Заказать</button> </Card.Link>

</Card.Body>


</Card>
   </Container>
</Tab>

      
    </Tabs>

 <Resto />

    </>
  );
}

export default Filters;