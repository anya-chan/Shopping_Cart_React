import React from 'react'
import {Nav, Navbar, Container, Row, Col, Button, Alert, Breadcrumb, Cart} from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function Title(props) {
  return (
          <header className='sticky-top mb-1'>
          <Row>
            <Col>
              <Link className='custom-link' to="/"><span>Sunset</span></Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Navbar className='custom-navbar' data-bs-theme="light">
                <Container>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/productList">One Piece</Nav.Link>
                    <Nav.Link as={Link} to="#features">Features</Nav.Link>
                    <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </header>
          )
}
