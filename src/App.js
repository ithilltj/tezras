import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Top from './Top/Top';
import Footer from './Footer/Footer';
import Foodhouse from './Foodhouse/Foodhouse';
import Carousel from './Header/Carousel';
import Menu from './Menu/Menu';
import Service from './Service/Service';
import Cart from './Cart/Cart';

function App() {
  return (
    <>
    <Header />
    <Carousel />
    <Top />
    <Menu />
    <Foodhouse />
    <Service />
    <Footer/>

    </>
    
  );
}

export default App;
