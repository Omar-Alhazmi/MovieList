import React from 'react'
import './search.css'
import {
  Form,
  Container, Navbar, FormControl
} from 'react-bootstrap';
////this component take the handleDetails and handleChange function 
// from the app component to handle user input and display the  Search result
const Searchbar = (props) => {
  return (
    <div className="co">
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Movi List </Navbar.Brand>
          <Form inline onSubmit={props.handleDetails}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.handleChange} />
          </Form>
        </Navbar>
      </Container>
    </div>

  )
}

export default Searchbar;