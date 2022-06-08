
import {  Container, NewsLetterContent  } from './styles'






export const NewsLetter = () => {

 


    return(

        <Container>
        <NewsLetterContent> 
                 <div className='infoDeals'>
                     GET THE LATEST DEALS AND MORE                       
                </div>

        <div className='latestDealsContent'>
        <input type='text' placeholder='Enter email address' />
        <button type='submit' >Sign Up</button>
        </div>



        <div className='termsContainer'>
            <input type='checkbox' />
            <p>I have read and accepted Info-Tech's 
                <mark> general conditions</mark> and  <mark>privacy policy</mark>.
            </p>
        </div>   

       
           
        </NewsLetterContent>
        </Container>
    )
}