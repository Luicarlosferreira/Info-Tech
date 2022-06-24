import React from 'react'
import {Link} from 'react-router-dom'
import { Container } from './styles'
import { SectionProducts } from '../../../data/SectionProducts/SectionProducts'




export const SectionItems = () => {

  

  return (
    <Container>      
      
      {SectionProducts.map((item)=> 
          (
          
          <div id='productsCard' className="card" key={item.id}>
           <div className="spanCard">{item.span}</div>
           <div className="cardImage" ><img src={item.image}/></div>
           <div className="cardTitle" >{item.title}</div>
           <div className="cardPrice" >$ {item.price}</div>
           <Link to={`/products/${item.id}`}><div className="cardButton">Ver detalhe</div></Link>           
           </div>           
            
          
          
        )
      )}












      {/* <*/}
    </Container>
  )
}





