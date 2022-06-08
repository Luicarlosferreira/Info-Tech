import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome,    
  FaUserAlt,   
  FaDesktop
  
} from 'react-icons/fa'



import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />                
        <SidebarItem Icon={FaDesktop} Text="Products" />
        <SidebarItem Icon={FaUserAlt} Text="About us" />
        
      </Content>
    </Container>
  )
}

export default Sidebar