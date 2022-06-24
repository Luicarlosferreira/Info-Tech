
import { Products } from '../../data/Products/Products';
import Slider from "react-slick";
import { Container }  from './styles';
const data = Products;



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
 
    
   } ;
  return (

    <Container>   
      <h2> TOP DEALS </h2>
      <br />   
      <br />  
    <Slider {...settings}>
      
        {data.map((item)=> {
         {
          return (
            <div key={item.id}>
              
              <h5> {item.name} </h5>
              <p> {item.description} </p>
              <span> {item.price} </span>
              <img  src={item.image}  />
          </div>
          )
         }
       }                        
       )}      
      
    </Slider>
    </Container>
  );
}