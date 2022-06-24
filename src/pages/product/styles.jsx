import styled from 'styled-components'


export const Container = styled.div`
    
    background-color: white;          
    display: flex;
    justify-content: center; 
    flex-flow: column wrap;    
     padding: 7em 0.5em;  
     gap: 10px;
      
.categoryContent{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
    left: 4em;
    gap: 4px;
    
}
.categoryContent p{
    color: #171923fd;
    cursor: pointer;
    border-bottom: solid 1px  transparent;
    transition: all 0.2s linear;
}
.categoryContent p:hover{
border-bottom: solid 1px #171923fd ;
}


.categoryContent svg{
    position: relative;
    
}

.card{
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-flow: column wrap;        
    justify-content: center;
    align-items: center; 
    ;

   

    
}

.detailsContent{
    
    display:flex;
    justify-content: center;
    align-items: center;
    

}

.cardImage img{
   max-width: 600px;
         
}

.detailsItem{
    width: 550px;
    height: 600px;
    display: flex;   
    gap: 2em;
    justify-content: center;
    flex-flow: column wrap;
    color: white;
    background-color: #171923fd;     
    padding: 1em 2em;
    
}
.detailsItem h2{
    color: orange;
    letter-spacing: 2px;
    font-size: 2em;
}

.buyOption{
    display: flex;    
    gap: 1em;
}
.buyOption button{
    
    width: 160px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: all 0.2s linear;
    font-weight: 600;
    display: flex;
    align-items: center; 
    justify-content: center;
    gap: 10px;
}
.buyOption button svg{
    position: relative;
    top: -1.5px;
}

.buyOption button:nth-child(2) {
      background-color: orange;
      color: white;
}





.buyOption button:nth-child(1):hover{
    background-color: #f5f5f5c5;    
}


.buyOption button:nth-child(2):hover{
    background-color: #ffa600cc;   
}

.moreInformation p {
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s linear;
}
.moreInformation p:hover{
   color: orange;
}

















`