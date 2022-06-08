import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;   
  background-color: #1A202C; 
  font-size: 20px;
  color: white;
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  transition: all 0.2s linear;
 


  > svg {    
    margin: 0 25px;  
  }
 

  &:hover {
    background-color: #0000005c;
  }


`;