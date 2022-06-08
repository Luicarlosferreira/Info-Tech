import styled from 'styled-components';


export const Container = styled.div`
    height: 100px;   
    display: flex;
    justify-content: space-between;   
    padding: 2em; 
    align-items: center;    
    background: #1a202c;
    box-shadow: 0 0 5px 1px;
    



    svg{
        
        color: white;
        width: 30px;
        height: 30px;          
        cursor: pointer;
        transition: all 0.2s linear;
        
    }

  span{
      color: white;
      position: relative;
      left: 3.5em;
      font-size: 2em;   
      font-weight: bolder;   
      padding: 3px 15px;
      border-radius: 5px;
      background-color: orange;
  

  }





`
