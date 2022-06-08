import React, { useState } from 'react';
import { Container } from './styles';
import { FaBars} from 'react-icons/fa';
import Sidebar from '../Sidebar';
import SearchField from '../SearchField';
import  SimpleSlider from '../Carousel/index';



export const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <Container>
            <FaBars onClick={showSidebar} />
            <span>INFO-TECH</span>
            {sidebar && <Sidebar active={setSidebar} />}

            <SearchField />  
            
        </Container>
        <SimpleSlider />
        </>
        
    )

}