import React from 'react'
import { Container } from './styles'
import { GoSearch } from  "react-icons/go";
import { SearchInput } from './SearchInput';


const SearchField = () => {
  return (
    <Container>
      <SearchInput Search="Search your product..." />     
      <GoSearch /> 

    </Container>
  )
}

export default SearchField