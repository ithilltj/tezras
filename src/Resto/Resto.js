import React from 'react'
import './Resto.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import burger1 from '../img/item_01-480x480_1.png';
import plov1 from '../img/блюда_DoV (6).png'
import plov2 from '../img/1642364003_7-papik-pro-p-plov-klipart-8.png'
import lagman from '../img/FOODS/image_6_39.jpg'
import shurbo from '../img/FOODS/image_6_40.jpg'
import polov from '../img/FOODS/image_6_236.jpg'
import mastoba from '../img/FOODS/image_6_41.jpg'
import sambusa from '../img/FOODS/image_6_49.jpg'
import shashlik from '../img/FOODS/image_6_64.jpg'
import shashlik_kurinniy from '../img/FOODS/image_6_63.jpg'
import qayla from '../img/FOODS/image_6_61.jpg'
import shashlik_ovosh from '../img/FOODS/image_6_67.jpg'
import shashlik2 from '../img/FOODS/image_6_68.jpg'
import mantu from '../img/FOODS/image_6_46.jpg'
import fri1 from '../img/FOODS/image_6_70.jpg'
import fri2 from '../img/FOODS/image_6_73.jpg'
import kompot from '../img/FOODS/image_6_100.jpg'
import cola from '../img/FOODS/image_6_106.jpg'
import fanta from '../img/FOODS/image_6_108.jpg'







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


<Tab eventKey="res1" title="ОШХОНАИ МИЛЛӢ"  >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={mantu} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Манту
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>6 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={shurbo} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Шурбо
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>15 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={shashlik} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Сихкабоб Фарш
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>16 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={shashlik2} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Сихкабоб ассорти
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>110 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={lagman} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Лагман
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>15 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={fri1} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Картошка Фри
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>12 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={fri2} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Картошка по деревенски
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>14 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={polov} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Оши палов 1 х 1
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={sambusa} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Самбусаи тандурӣ
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>8 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={mastoba} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Мастоба
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>13 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={qayla} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
         Сихкабоби қабурғагӣ
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>28 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={shashlik_kurinniy} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Сихкабоби мурғӣ
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>17 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={shashlik_ovosh} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Сихкабоби сабзавотӣ
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>15 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={kompot} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Компот
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>10 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={fanta} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Fanta
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>7 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={cola} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Coca-Cola
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>7 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   



<Tab eventKey="res2" title="БУРГЕР"  >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   

 <Tab eventKey="res3" title="БАРОДАРОН" >
<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   


{/* Duston */}
 <Tab eventKey="res4" title="ДУСТОН"  >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov1}  style={{width:'208px',height:'144px', marginTop:'5px'}}/>
      <Card.Body>
       
        <Card.Text>
          Оши 10x1
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>РОЙГОН</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
    </Card>

    

  </Container>  


 </Tab>   


 <Tab eventKey="res5" title="M-CAFE" >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   

 <Tab eventKey="res6" title="LA BOTTEGA" >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

  </Container>  


 </Tab>   


 <Tab eventKey="res7" title="ПРИСТИЖ" >

<Container style={{  display:'flex' ,justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
      <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>


    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov1}  style={{width:'208px',height:'144px', marginTop:'5px'}}/>
      <Card.Body>
       
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={burger1} style={{width:'208px',height:'144px'}} />
      <Card.Body>
        <Card.Text >
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '13rem',height:'17.438rem', display:'flex',alignItems:'center' }}>
      <Card.Img variant="top" src={plov2}  style={{width:'208px',height:'144px', marginTop:'15px'}}/>
      <Card.Body>
        
        <Card.Text>
          Some quick
        </Card.Text>

        <Card.Title style={{fontSize:'15px'}}>25 с</Card.Title>

        <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>

      </Card.Body>
    
     
    </Card>

  </Container>  


 </Tab>   





    </Tabs>

   </>
  )
}

export default Resto