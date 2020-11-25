import React from 'react'
import { Nav } from 'react-bootstrap'

export default function MenuLinks() {
    return (
        <>
            <Nav className="m-auto flex-column">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </>
    )
}
