import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import burger1 from '../img/item_01-480x480_1.png';
import burger2 from '../img/item_01-480x480_2.png';
import burger3 from '../img/item_01-480x480_3.png';
import burger4 from '../img/item_01-480x480_4.png';
import pizza1 from '../img/pizza1.png'
import pizza2 from '../img/pizza2.png'
import pizza3 from '../img/pizza3.png'
import pizza4 from '../img/pizza4.png'
import sandwich1 from '../img/sandwich1.png'
import sandwich2 from '../img/sandwich2.png'
import sandwich3 from '../img/sandwich3.png'
import sandwich4 from '../img/sandwich4.png'
import plov_icon from '../img/plov-icon.png'
import salad_icon from '../img/salad-icon.png'
import plov1 from '../img/блюда_DoV (6).png'
import plov2 from '../img/1642364003_7-papik-pro-p-plov-klipart-8.png'
import qurutab from '../img/Tajikistan-2019-1445_new-removebg-preview.png'
import burger_icon from '../img/burger-icons.png'
import pizza_icon from '../img/pizza-icons.png'
import sandwich_icon from '../img/sandwich icon.png'
import './Menu.css'
import Resto from '../Resto/Resto';

function Menu() {

  

  return (
<>
    <Container style={{marginTop:'100px'}} id='foods' >
        <Row>
            <Col className='text-center'>
            <h2 className='text-uppercase our-food'>Наши <span className='orange'> блюда</span> </h2>
            </Col>
        </Row>
    </Container >



    <Tabs
      defaultActiveKey="burger"
      id="fill-tab-example"
      className="mb-3 mt-5 tabb"
      fill
    >

        
        { /*  Burger  */  }

        
      <Tab  eventKey="burger" title={<span> <img src={burger_icon} alt='burger' width={58}/> БУРГЕР</span>}  >
  
      <Container style={{  display:'flex' ,justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
      <Card className='card-layout'>
      <Card.Img variant="top" src={burger1} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Text >
         <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart' >В корзину</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card  className='card-layout'>
      <Card.Img variant="top" src={burger1} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Text >
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={burger1} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Text >
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
      
      
    </Card>
    <Card className='card-layout'>
      <Card.Img variant="top" src={burger2}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Text >
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>


      </Card.Body>
     
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={burger1} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Text >
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
      
      
    </Card>


    
    <Card className='card-layout'>
      <Card.Img variant="top" src={burger3}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Text >
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>


      </Card.Body>
     
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={burger1} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Text >
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={burger4} style={{width:'160px',height:'160px'}} />
      <Card.Body>
        <Card.Text style={{fontSize:'15px',color:'#fff'}}>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>


      </Card.Body>
      
      
    </Card>
      </Container>
     </Tab>


     { /* Pizza */  }

      <Tab eventKey="pizza"  title={<span> <img src={pizza_icon} width={58} /> ПИЦЦА</span>}>
      <Container className='d-flex justify-content-center align-items-center text-center' style={{flexWrap:'wrap',gap:'10px'}}>
      <Card className='card-layout'>
      <Card.Img variant="top" src={pizza1}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={pizza2}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={pizza3}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={pizza4}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
      
    </Card>
      </Container>
      </Tab>



      { /* Sandwich */  }

      <Tab eventKey="longer-tab"   title={<span> <img src={sandwich_icon} /> СЭНДВИЧ</span>}>
         <Container className='d-flex justify-content-center align-items-center text-center'  style={{flexWrap:'wrap',gap:'10px'}}>
         <Card className='card-layout'>
      <Card.Img variant="top" src={sandwich1}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={sandwich2}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
     
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={sandwich3}  style={{width:'160px',height:'160px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={sandwich4}  style={{width:'160px',height:'160px'}}/>
      <Card.Body >
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
      
    </Card>
         </Container>
      </Tab>



    { /* Plov  */ }


      <Tab eventKey="plov" title={<span> <img src={plov_icon} alt='плов' width={58}/> ПЛОВ</span>}>
         <Container className='d-flex justify-content-center align-items-center text-center'  style={{flexWrap:'wrap',gap:'10px'}}>
         <Card className='card-layout'>
      <Card.Img variant="top" src={plov1}  style={{width:'144px',height:'144px', marginTop:'5px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={plov2}  style={{width:'144px',height:'144px', marginTop:'15px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
     
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={plov1}  style={{width:'144px',height:'144px', marginTop:'5px'}}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
      
    </Card>

    <Card className='card-layout'>
      <Card.Img variant="top" src={plov2}  style={{width:'144px',height:'144px', marginTop:'5px'}}/>
      <Card.Body >
        <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
        <Card.Text>
          <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
        </Card.Text>

        <Card.Link href='tel:000440060'> <button className='cart'>В корзину</button> </Card.Link>

      </Card.Body>
    
      
    </Card>
         </Container>
      </Tab>




      { /* Qurutab */ }


<Tab eventKey="qurutab" title="КУРУТАБ">
   <Container className='d-flex justify-content-center align-items-center text-center'  style={{flexWrap:'wrap',gap:'10px'}}>
   <Card className='card-layout'>
<Card.Img variant="top" src={qurutab}  style={{width:'160px',height:'160px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
  <Card.Text>
    <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
  </Card.Text>

  <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

</Card.Body>

</Card>

<Card className='card-layout'>
<Card.Img variant="top" src={qurutab}  style={{width:'160px',height:'160px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
  <Card.Text>
    <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
  </Card.Text>

  <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

</Card.Body>


</Card>

<Card className='card-layout'>
<Card.Img variant="top" src={qurutab}  style={{width:'160px',height:'160px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
  <Card.Text>
    <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
  </Card.Text>

  <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

</Card.Body>


</Card>

<Card className='card-layout'>
<Card.Img variant="top" src={qurutab}  style={{width:'160px',height:'160px'}}/>
<Card.Body >
  <Card.Title style={{fontSize:'15px',color:'#fff'}}>Бепул</Card.Title>
  <Card.Text>
    <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
  </Card.Text>

  <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

</Card.Body>


</Card>
   </Container>
</Tab>


{ /* Салаты */ }


<Tab eventKey="salat" title={<span> <img src={salad_icon} alt='плов' width={58}/> САЛАТЫ</span>} id='salat'>
   <Container className='d-flex justify-content-center align-items-center text-center'  style={{flexWrap:'wrap',gap:'10px'}}>
   <Card className='card-layout'>
<Card.Img variant="top" src={qurutab}  style={{width:'160px',height:'160px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
  <Card.Text>
    <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
  </Card.Text>

  <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

</Card.Body>

</Card>

<Card className='card-layout'>
<Card.Img variant="top" src={qurutab}  style={{width:'160px',height:'160px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
  <Card.Text>
    <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
  </Card.Text>

  <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

</Card.Body>


</Card>

<Card className='card-layout'>
<Card.Img variant="top" src={qurutab}  style={{width:'160px',height:'160px'}}/>
<Card.Body>
  <Card.Title style={{fontSize:'15px',color:'#fff'}}>25 TJS</Card.Title>
  <Card.Text>
    <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
  </Card.Text>

  <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

</Card.Body>


</Card>

<Card className='card-layout'>
<Card.Img variant="top" src={qurutab}  style={{width:'160px',height:'160px'}}/>
<Card.Body >
  <Card.Title style={{fontSize:'15px',color:'#fff'}}>Бепул</Card.Title>
  <Card.Text>
    <p className='text-dark'>American Burger</p>
          <p className='text-dark'>Кафе Бургер</p>
  </Card.Text>

  <Card.Link href='tel:+992000440060'> <button className='cart'>В корзину</button> </Card.Link>

</Card.Body>


</Card>
   </Container>
</Tab>

      
    </Tabs>



 <Resto />

    </>
  );
}

export default Menu;