import React from 'react'
import {
    Form, InputGroup,
    Container, Row, Col
} from 'react-bootstrap';

const Searchbar = (props) => {
    return (
        <div className="co">
            <Container>
                <Form action="" onSubmit={props.handleDetails}>
                    <Row>
                        <Col sm>
                            <InputGroup.Prepend>
                                <Form.Control placeholder="Movi..." type="text" onChange={props.handleChange} />
                            </InputGroup.Prepend>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>

    )
}

export default Searchbar;