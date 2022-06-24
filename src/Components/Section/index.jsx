import React from 'react'
import { Container, SpanContent } from './styles'
import  SimpleSlider from '../Carousel/index';





import { SectionItems } from './SectionItems/index';



export const Section = () => {

  
  return (
    <>
    <SimpleSlider />

    
    <SpanContent>THE BEST FOR YOU</SpanContent>
    <Container>  
               
               <SectionItems />
                          
    </Container>
    
   
        </>
  )
}

