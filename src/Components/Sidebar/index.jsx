import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome,    
  FaUserAlt,   
  FaDesktop
  
} from 'react-icons/fa'
import {Link} from  'react-router-dom';



import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to="/" onClick={closeSidebar}><SidebarItem  Icon={FaHome} Text="Home" /></Link> 
        <Link to="products" onClick={closeSidebar}><SidebarItem  Icon={FaDesktop} Text="Products" /></Link>
        <Link to="login" onClick={closeSidebar}><SidebarItem  Icon={FaUserAlt} Text="Sign In" /></Link>                      
        
        
        
      </Content>
    </Container>
  )
}

export default Sidebar