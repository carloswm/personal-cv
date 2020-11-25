import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImgPerfil from './components/ImgPerfil'
import MenuLinks from './components/MenuLinks'

export default function App() {

    return (
        <Container fluid className="h-100">
            <Row className="h-100">
                <Col xs={6} md={2} className="d-flex align-items-center flex-column justify-content-center bg-dark py-4 h-100">
                    <ImgPerfil />
                    <h3 className="text-center text-white">Carlos Marigorda Foronda</h3>
                    <MenuLinks />
                </Col>
                <Col xs={12} md={10}>xs=12 md=8</Col>
            </Row>
        </Container>
    )
}
