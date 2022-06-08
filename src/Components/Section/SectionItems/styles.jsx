import styled from 'styled-components'


export const Container = styled.div`
    
    background-color: white;          
    display: flex;
    align-items: center;
    justify-content: space-around; 
    flex-flow: wrap;
    gap: 1px;
    padding: 20px;
    
    
    
    
    

.card{
    width: 450px;
    height: 500px;
    color: white;
    display: flex;
    gap: 10px;
    flex-flow: column wrap;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: #171923;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s linear;
    overflow: hidden;

    
}
.card:hover{
    background-color: #171923e2;
  
}







.spanCard{
    color: white;
    font-weight: bolder;    
    text-align: center;
    position: relative;
    left: -7.8em;
    width: 50%;
    top: -0.2em;
    font-size: 1.5em;
    letter-spacing: 1px;   
    background-color: orange;
    padding: 6px;
    transform: rotate(-50deg) 
}

.cardTitle{
    text-align: center;
    font-weight: 500;
    letter-spacing: 1px;
}



.cardPrice{
    font-size: 1.5em;
    letter-spacing: 1px;
    font-weight: bolder;    
}

.cardButton{
    background-color: orange;
    padding: 13px;
    border-radius: 3px;
    transition: all 0.2s linear;
    cursor: pointer;
    

}
.cardButton:hover{
    background-color: #f0ab2a;
    transform: scale(1.1);
    
}

.cardButton a {
    font-size: 1.1em;
    letter-spacing: 2px;
    color: white;
}
   



img{
   max-width: 250px;
   border-radius: 10px;
  
}



`