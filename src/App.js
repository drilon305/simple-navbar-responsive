import React from 'react';
import './components/index.css'
import styled from 'styled-components'
import Navbar from './components/Navbar';


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
