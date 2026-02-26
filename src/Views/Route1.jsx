import './Route1.css';
import { useState, useEffect } from 'react';
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
  const API_URL = "http://localhost:3001/galpoes";

  // Estados
  const [galpoes, setGalpoes] = useState([]); // Agora vem da API
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  // Estado do Formulário com os campos da Granja
  const [formData, setFormData] = useState({
    nome: '',
    qtdFrangos: '',
    qtdComedouros: '',
    qtdBebedouros: '',
    qtdVentiladores: '',
    qtdExaustores: '',
    qtdResponsaveis: '',
    termometro: false
  });

  const handleClose = () => {
    setShow(false);
    setValidated(false);
    setFormData({ nome: '', qtdFrangos: '', qtdComedouros: '', qtdBebedouros: '', qtdVentiladores: '', qtdExaustores: '', qtdResponsaveis: '', termometro: false });
  };
  
  const handleShow = () => setShow(true);

  // --- REQUISITAR INFORMAÇÕES (GET) ---
  const carregarDados = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setGalpoes(data);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  useEffect(() => {
  // Criamos uma função interna assíncrona
  const inicializar = async () => {
    await carregarDados();
  };

  inicializar(); // Chamamos ela aqui
}, []); // Mantemos o array vazio para rodar só uma vez

  // --- SUBMETER INFORMAÇÕES (POST) ---
// 1. Correção do useEffect para evitar o aviso de renderização em cascata
useEffect(() => {
  const fetchData = async () => {
    await carregarDados();
  };
  fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []); 

// 2. Correção do Catch (removendo a variável não utilizada)
const handleSalvar = async () => {
  // ... resto do código anterior ...
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      await carregarDados(); 
      handleClose();
    }
  } catch (err) { // Mudei para 'err' e vamos usá-lo no log para o ESLint não reclamar
    console.error("Detalhes do erro:", err); 
    alert("Erro ao salvar no servidor.");
  }
};

  return (
    <Container className="mt-5">
      <Row className="align-items-center mb-4">
        <Col xs={9}>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="2" className="fw-bold">Galpões</Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Pesquisar galpão..." />
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={3} className="text-end">
          <Button className="me-2" variant="primary"><IoSearchSharp /></Button>
          <Button variant="success" onClick={handleShow}><IoMdAdd /></Button>
        </Col>
      </Row>

      {/* TABELA DA GRANJA */}
      <Table striped bordered hover responsive shadow-sm>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Frangos</th>
            <th>Comed.</th>
            <th>Bebed.</th>
            <th>Vent.</th>
            <th>Exaust.</th>
            <th>Resp.</th>
            <th>Term.</th>
          </tr>
        </thead>
        <tbody>
          {galpoes.map((galpao, i) => (
            <tr key={galpao.id || i}>
              <td>{i + 1}</td>
              <td>{galpao.nome}</td>
              <td>{galpao.qtdFrangos}</td>
              <td>{galpao.qtdComedouros}</td>
              <td>{galpao.qtdBebedouros}</td>
              <td>{galpao.qtdVentiladores}</td>
              <td>{galpao.qtdExaustores}</td>
              <td>{galpao.qtdResponsaveis}</td>
              <td>{galpao.termometro ? "Sim" : "Não"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* MODAL DE CADASTRO COM VALIDAÇÃO */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Form noValidate validated={validated} onSubmit={handleSalvar}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar Novo Galpão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="g-3">
              <Form.Group as={Col} md="12">
                <Form.Label>Nome do Galpão</Form.Label>
                <Form.Control 
                  required 
                  type="text" 
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </Form.Group>
              
              <Form.Group as={Col} md="4">
                <Form.Label>Qtd. Frangos</Form.Label>
                <Form.Control required type="number" value={formData.qtdFrangos}
                  onChange={(e) => setFormData({...formData, qtdFrangos: e.target.value})} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Comedouros</Form.Label>
                <Form.Control required type="number" value={formData.qtdComedouros}
                  onChange={(e) => setFormData({...formData, qtdComedouros: e.target.value})} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Bebedouros</Form.Label>
                <Form.Control required type="number" value={formData.qtdBebedouros}
                  onChange={(e) => setFormData({...formData, qtdBebedouros: e.target.value})} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Ventiladores</Form.Label>
                <Form.Control required type="number" value={formData.qtdVentiladores}
                  onChange={(e) => setFormData({...formData, qtdVentiladores: e.target.value})} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Exaustores</Form.Label>
                <Form.Control required type="number" value={formData.qtdExaustores}
                  onChange={(e) => setFormData({...formData, qtdExaustores: e.target.value})} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Responsáveis</Form.Label>
                <Form.Control required type="number" value={formData.qtdResponsaveis}
                  onChange={(e) => setFormData({...formData, qtdResponsaveis: e.target.value})} />
              </Form.Group>

              <Form.Group as={Col} md="12">
                <Form.Check 
                  type="switch" 
                  label="Presença de termômetro de ambiente" 
                  checked={formData.termometro}
                  onChange={(e) => setFormData({...formData, termometro: e.target.checked})}
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
            <Button variant="primary" type="submit">Salvar Galpão</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Route1;