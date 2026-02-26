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
            <h5>Sobre a Granja</h5>
            <ul className="list-unstyled">
              <li>Historia da Granja</li>
              <li>Missão e Valores</li>
              <li>Equipe e Responsaveis</li>
              <li>Contato</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Produtos</h5>
            <ul className="list-unstyled">
              <li>Ovos Caipiras</li>
              <li>Fangos de Cortes</li>
              <li>Rações Naturais</li>
              <li>Serviços de Destribuição</li>
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
            <p>© 2026 - GRANJA-WEB</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
