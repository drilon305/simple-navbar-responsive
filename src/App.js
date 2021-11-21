import React from 'react';
import './index.css'
import styled from 'styled-components'
import Navbar from './Navbar';


const App = () => {

  return (
     <Container>
       <Navbar />
     </Container>
   

  )
}

const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`

export default App;
