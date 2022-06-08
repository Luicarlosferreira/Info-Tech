import styled from 'styled-components'


export const Container = styled.footer`
    position: relative;   
    background-color: white;
    display: flex;
    flex-flow: column wrap;
    gap: 10px;


    hr{
        background-color: #1a202c;
        height: 1px;
    }




    .footerContacts{
        display: flex;
        padding: 2em;
        gap: 20px;
        justify-content: center;
    }
   
    .footerContacts div{
        background-color: white;
        display: flex;
        flex-flow: column;
        gap: 5px;
        padding: 15px;        
        align-items: flex-start ;
    }

    .footerContacts div h3{
        position: relative;
        bottom: 13px;
    }

    .footerContacts div mark{
        border-bottom: 1px solid black;
        background-color: transparent;
        cursor: pointer;
        transition: all 0.2s linear;        
        border-radius: 2px;
       
    }
    .footerContacts div mark:hover{        
        color: blue;        
    }

    .footerContacts div:nth-child(1) button{
       width: 35%;
       padding: 7px;
       border-radius: 5px;
       border: none;
       background-color: #1a202c;
       color: white;
       font-weight: bolder;
       letter-spacing: 1px;
       transition: all 0.2s linear;
       cursor: pointer;
       position: relative;
       top: 13px;
    }

    .footerContacts div:nth-child(1) button:hover{
        background-color: #1a202cb7;        
        
    }

    .footerContacts div a{
       color: #1a202c;
       border-bottom: 1px solid transparent;
       transition: all 0.2s linear;
       
    }
    .footerContacts div a:hover{
        border-bottom: 1px solid #1a202c;
    }

    .footerConfigurations{
        background-color: white;
        color: white;
        padding: 5px;
        display: flex;
        gap: 2em;
        align-items: center;
        justify-content: center;
        
    }
    .footerConfigurations a{
        color: #1a202c;
        font-size: 10px;
        letter-spacing: 1px;
        border-bottom: 1px solid transparent;
        transition: all 0.2s linear;

    }
    .footerConfigurations a:hover{
        border-bottom: 1px solid #1a202c;
    }


.footerSocialMedia{
    position: relative;
    top: 1em;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
}


svg{
    padding: 1px;
    width: 25px;
    height: 25px;      
    transition: all 0.2s linear;
    cursor: pointer;
    border-bottom: 1px solid transparent;
}

 svg:hover{     
    border-bottom: 1px solid #1a202c;
}













    
`