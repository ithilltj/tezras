import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {Tabs,Tab,Card} from 'react-bootstrap'

function Foods() {

    const [foods,setFoods]=useState([]);

    const getFood=async function(){
    const url='http://192.168.0.100:7777/food/';

    const res=await fetch(url);
    const data=await res.json();

    setFoods(data)

    }

    useEffect(()=>{

        getFood();


    },[])


    function filterFood(foods){

      foods.map((el,ind,arr)=>el).filter((el,ind,arr)=>{return arr.indexOf(el)!=ind })


    }

  return (
    <>
    

     {(
   

<Tabs  className='d-flex justify-content-center' defaultActiveKey='Лагман'>
{foods.map((food)=>(
  <Tab eventKey={food.category} title={filterFood(foods)}  >

  <Card style={{ width:'330px',height:'350px', display:'flex',alignItems:'center' }} class='card-layout'  >
  <Card.Img variant="top"  style={{width:'320px',height:'200px'}} src={'http://192.168.0.100:7777'+food.image} />
  <Card.Body>
    <Card.Text>{food.name}</Card.Text>
  
    <Card.Title style={{fontSize:'15px'}}>{food.category+'|' + food.restaurant}</Card.Title>
  
    <Card.Title style={{fontSize:'15px'}}>{food.price+'с'}</Card.Title>
  
    <Card.Link href='tel:+992000440060'> <button className='cart'>Заказать</button> </Card.Link>
  
  </Card.Body>
  
  </Card>

  </Tab>  
))

 
}
</Tabs>



     )}       

    </>
    
  )
}

export default Foods