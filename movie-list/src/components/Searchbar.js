import React from 'react'
import './search.css'
import {
    Form, 
    Container,Navbar,Nav,Button,FormControl
} from 'react-bootstrap';

const Searchbar = (props) => {
    return (
        <div className="co">
            <Container>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Login</Nav.Link>
      <Nav.Link href="#features">Re</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline onSubmit={props.handleDetails}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.handleChange} />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
            </Container>
        </div>

    )
}

export default Searchbar;