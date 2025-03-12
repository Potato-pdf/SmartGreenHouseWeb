import { useEffect, useState } from "react";
import { getAll } from "../api/SmartGreenHouse.api";
import { GreenhouseList } from "./GreenHouseList";
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function GreenhouseCard() {
    const [greenhouses, setGreenhouses] = useState([]);

    useEffect(() => {
        async function loadSmartGreenHouse() {
            try {
                const res = await getAll();
                setGreenhouses(res.data);
            } catch (error) {
                console.error("Error al cargar los invernaderos:", error);
            }
        }
        loadSmartGreenHouse();
    }, []);

    return (
        <GridContainer>
            {greenhouses.map(greenhouse => (
                <GreenhouseList key={greenhouse.id_invernadero} greenhouse={greenhouse} />
            ))}
        </GridContainer>
    );
}