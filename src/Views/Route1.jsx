import './Route1.css';
import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from 'react-bootstrap';
import { IoMdAdd } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

const Route1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const galpoesDataSet = [
    { nome: "Escola jujutsu", matriculas: 500, municipio: "Guarabira", estado: "PB" },
    { nome: "HOGWARTS", matriculas: 600, municipio: "mundo bruxo", estado: "PB" },
    { nome: "Cobra Kai", matriculas: 200, municipio: "vale de san", estado: "PB" }
  ];

  return (
    <Container className="mt-5">
      {/* Formulário de busca */}
      <Row>
        <Col xs={9}>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
               Galpões
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Nome da Instituição de Ensino"
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={3}>
          <Button className="me-2" variant="primary">
            <IoSearchSharp />
          </Button>
          <Button variant="primary" onClick={handleShow}>
            <IoMdAdd />
          </Button>
        </Col>
      </Row>

      {/* Tabela da Granja */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Galpões</th>
            <th>Quant-Frangos</th>
            <th>Quant-Comedouros</th>
            <th>Quant-Bebedouros</th>
            <th>Quant-Ventiladores</th>
            <th>Quant-Exaustoures</th>
            <th>Quant-Responsaveis</th>
            <th>Presença de termômetro de ambiente</th>
          </tr>
        </thead>
        <tbody>
          {galpoesDataSet.map((galpao, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{galpao.nome}</td>
              <td>{galpao.matriculas}</td>
              <td>{galpao.municipio}</td>
              <td>{galpao.estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal para adicionar os Atributos da granja */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Galpão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Aqui você pode colocar o formulário para cadastrar um novo galpão.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Route1;
