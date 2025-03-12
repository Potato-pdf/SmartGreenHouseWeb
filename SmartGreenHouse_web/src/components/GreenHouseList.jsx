import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(152, 251, 152, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(152, 251, 152, 0.5);
    box-shadow: 0 8px 20px rgba(152, 251, 152, 0.15);
  }
  
  h2 {
    color: #98FB98;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: #E0FFF0;
    margin: 0.75rem 0;
    line-height: 1.6;
  }
  
  hr {
    border-color: rgba(152, 251, 152, 0.2);
    margin: 1rem 0;
  }

  img {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export function GreenhouseList({ greenhouse }) {
    const imagen = greenhouse.imagen.replace("http://localhost:8000/assets/", "");
    return (
        <Card>
            <img 
                src={`./public/${imagen}`}
                alt={greenhouse.nombre} 
                style={{ width: "100%", borderRadius: "8px" }} 
            />
            <h2>{greenhouse.nombre}</h2>
            <p>{greenhouse.descripcion}</p>
            <p>Precio: ${greenhouse.precio}</p>
            <hr />
        </Card>
    );
}