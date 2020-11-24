import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {

    return (
        <Container fluid>
            <Row>
                <Col xs={6} md={4}>xs=6 md=4</Col>
                <Col xs={12} md={8}>xs=12 md=8</Col>
            </Row>
        </Container>
    )
}
