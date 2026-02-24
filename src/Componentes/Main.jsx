import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import './Main.css';

const imagens = [img1, img2, img3];

function Main() {
  const [incremento, setIncremento] = useState(0);
  const [cardsDinamicos, setCardsDinamicos] = useState([]);

  const incrementarHandleClick = () => {
    setIncremento(incremento + 1);
    console.log('clicou no botão! ' + (incremento + 1));
  };

  const adicionarCard = () => {
    const novoCard = {
      id: cardsDinamicos.length + 1,
      img: imagens[cardsDinamicos.length % imagens.length],
    };
    setCardsDinamicos([...cardsDinamicos, novoCard]);
  };

  return (
    <div className="page-container">
      {/* Carrossel */}
      <Carousel data-bs-theme="white" className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Primeiro slide" />
          <Carousel.Caption>
            <h5>Primeiro slide</h5>
            <p>Descrição da primeira imagem.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Segundo slide" />
          <Carousel.Caption>
            <h5>Segundo slide</h5>
            <p>Descrição da segunda imagem.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Terceiro slide" />
          <Carousel.Caption>
            <h5>Terceiro slide</h5>
            <p>Descrição da terceira imagem.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Cards fixos com imagens */}
      <div className="cards-container">
        {imagens.map((img, index) => (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card {index + 1}</Card.Title>
              <Card.Text>Descrição da imagem {index + 1}.</Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="primary">Saiba Mais</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Cards dinâmicos */}
      <div className="cards-container mt-4">
        {cardsDinamicos.map((card) => (
          <Card style={{ width: '18rem' }} key={card.id}>
            <Card.Img variant="top" src={card.img} />
          </Card>
        ))}
      </div>

      {/* Botões */}
      <div className="d-flex flex-column align-items-center mt-4">
        <p>Incremento: {incremento}</p>

        <Button className="my-button" onClick={incrementarHandleClick}>
          Adicionar
        </Button>

        <Button className="my-button mt-3" onClick={adicionarCard}>
          Adicionar Card Dinâmico
        </Button>
      </div>
    </div>
  );
}

export default Main;
