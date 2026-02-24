import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4 pt-4 pb-2">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>Careers</li>
              <li>News</li>
              <li>Policies</li>
              <li>Help</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Discover</h5>
            <ul className="list-unstyled">
              <li>Trust & Safety</li>
              <li>Gift Cards</li>
              <li>Business Travel</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Social</h5>
            <div>
              <FaFacebook className="me-2" />
              <FaTwitter className="me-2" />
              <FaInstagram />
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>© 2025 - Meu Projeto com React-Bootstrap</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
