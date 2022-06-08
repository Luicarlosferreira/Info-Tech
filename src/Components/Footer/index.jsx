import {Container} from './styles'
import {FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'




export const Footer = () =>{
    return (

        <Container>
            <div className='footerContacts'>
                <div>
                    <h3>Tech Loyalty Card</h3>
                    <p>Join our family and learn about promotions and <br/>technological interests. Discounts and much more.</p>
                    <mark>More Information</mark>
                    <button>GET IT</button>
                </div>



                <div>
                    <h3>Order & Purchases </h3>
                    <a href='#'>Check Order Status</a>
                    <a href="#">Shipping, Delivery & Pickup</a>
                    <a href="#">Returns & Exchanges</a>
                    <a href="#">Price Match Guarantee</a>
                    <a href="#">Product Recalls</a>
                    <a href="#">Gift Cards</a>                    
                </div>


                <div>
                    <h3>Support & Services</h3>
                    <a href='#'>Visit our Support Center</a>
                    <a href="#">Shop with an Expert</a>
                    <a href="#">Schedule a Service</a>
                    <a href="#">Manage an Appointment</a>
                    <a href="#">Protection & Support Plans</a>
                    <a href="#">Contact Us</a>
                </div>


                <div>
                    <h3>Payment Options</h3>
                    <a href='#'>My Best Buy® Credit Card</a>
                    <a href="#">Pay Your Bill at Citibank</a>
                    <a href="#">Lease to Own</a>                    
                </div>


                <div>
                    <h3>Partnerships</h3>
                    <a href='#'>Affiliate Program</a>
                    <a href="#">Advertise with Us</a>
                    <a href="#">Developers</a>                         

                </div>
            </div>


            <hr/>

            <div className='footerConfigurations'>
                <a href="#">CONTACTS</a>
                <a href="#">PRIVACY POLICY</a>
                <a href="#">POLICIES AND CERTIFICATIONS</a>
                <a href="#">CONFIGURE COOKIES</a>
                <a href="#">TERMS AND CONDITIONS</a>
                <a href="#">SERVICE QUALITY</a>
            </div>


            





            <div className='footerSocialMedia'>

            <FaWhatsapp />
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />   

            </div>
            <br />
            <br />
            <br />




        </Container>

    )
}