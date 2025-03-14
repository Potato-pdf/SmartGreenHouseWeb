import { useEffect, useState } from "react";
import { getAll } from "../api/SmartGreenHouse.api";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '../context/ThemeContext';

const DetailContainer = styled.div`
  padding: 2rem;
  background: white;  // Solid white background
  border-radius: 20px;
  padding-top: 0;
`;

const GreenhouseItem = styled.article`
  margin-bottom: 4rem;
  background: white;  // Solid white background
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  height: 600px;
  
  .slick-slider {
    height: 100%;
  }

  .slick-slide {
    height: 600px;
    
    div {
      height: 100%;
    }
  }

  .slick-dots {
    bottom: 25px;
    
    li button:before {
      color: white;
      font-size: 12px;
    }
    
    li.slick-active button:before {
      color: #4CAF50;
    }
  }

  .slick-prev, .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    
    &:before {
      font-size: 40px;
    }
  }

  .slick-prev {
    left: 25px;
  }

  .slick-next {
    right: 25px;
  }
`;

const CarouselImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 2rem 3rem;
  
  h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const InfoCard = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;  // Light gray background for cards
  border-radius: 12px;
  
  h3 {
    color: #4CAF50;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${props => props.isDarkMode ? '#e0e0e0' : '#666'};
    line-height: 1.6;
    margin: 0;
  }
`;

const Price = styled.div`
  font-size: 2rem;
  color: #4CAF50;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: '$';
    font-size: 1.5rem;
    color: #666;
  }
`;

const IdBadge = styled.span`
  background: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
`;

export default function GreenhouseDetail() {
  const { isDarkMode } = useTheme();
  const [greenhouses, setGreenhouses] = useState([]);

  useEffect(() => {
    async function loadGreenhouses() {
      try {
        const res = await getAll();
        setGreenhouses(res.data);
      } catch (error) {
        console.error("Error al cargar los invernaderos:", error);
      }
    }
    loadGreenhouses();
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  };

  return (
    <DetailContainer>
      {greenhouses.map(greenhouse => {
        const imagen = greenhouse.imagen.replace("http://localhost:8000/assets/", "");
        // Creamos un array con la misma imagen repetida para el carrusel
        const images = Array(4).fill(`./public/${imagen}`);

        return (
          <GreenhouseItem 
            key={greenhouse.id_invernadero}
            id={`greenhouse-${greenhouse.id_invernadero}`}
            isDarkMode={isDarkMode}
          >
            <CarouselContainer>
              <Slider {...carouselSettings}>
                {images.map((img, index) => (
                  <CarouselImage key={index} src={img} />
                ))}
              </Slider>
            </CarouselContainer>
            
            <Content>
              <h2>
                {greenhouse.nombre}
                <IdBadge>ID: {greenhouse.id_invernadero}</IdBadge>
              </h2>
              
              <Price>{greenhouse.precio}</Price>
              
              <InfoGrid>
                <InfoCard isDarkMode={isDarkMode}>
                  <h3>Descripción</h3>
                  <p>{greenhouse.descripcion}</p>
                </InfoCard>
                <InfoCard isDarkMode={isDarkMode}>
                  <h3>Características</h3>
                  <p>• Sistema de riego automatizado</p>
                  <p>• Control de temperatura</p>
                  <p>• Monitoreo en tiempo real</p>
                </InfoCard>
                <InfoCard isDarkMode={isDarkMode}>
                  <h3>Dimensiones</h3>
                  <p>• Área: 100m²</p>
                  <p>• Altura: 3m</p>
                  <p>• Capacidad: 1000 plantas</p>
                </InfoCard>
              </InfoGrid>
            </Content>
          </GreenhouseItem>
        );
      })}
    </DetailContainer>
  );
}
