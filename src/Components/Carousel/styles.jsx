import styled from "styled-components";


export const Container = styled.div`
    
padding: 40px;
background-color: white;
font-size: 1.6em;
text-align: center;

h2{
    color: orange;    
    padding: 10px;
    width: 100%;    
    border-radius: 5px;
    background-color: #1a202c;
  
}

    img{
    margin: auto;
    padding: 10px;
    width: 300px;
    height: 300px;
   
 
   
}




    p{
        font-size: 15px;
        margin: 10px;
    }
    span{
        color: #1a202c;
        margin: 10px;  
        padding: 5px;  
        border-radius:3px;    
        cursor: pointer;
        transition: all 0.3s linear;
        
    }

    span:hover{
        background-color: #1a202c;
        color: white;
    }
   





@media (max-width: 1200px) {
    img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    
}


`

