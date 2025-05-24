// src/modules/Home/containers/PlantManagerSection/index.js
import React from 'react';
import {
  PlantManagerContainer,
  PlantManagerContent,
  PlantManagerText,
  PlantManagerTitle,
  PlantManagerSubtitle,
  PlantManagerButton
} from './styles';

import { FaCalendarAlt } from 'react-icons/fa';

const PlantManagerSection = () => {
  return (
    <PlantManagerContainer>
      <PlantManagerContent>
        <PlantManagerText>
          <PlantManagerTitle>
            Você é um Gerente de Planta?
          </PlantManagerTitle>
          <PlantManagerSubtitle>
            Inscreva-se para uma visita em sua indústria.
          </PlantManagerSubtitle>
        </PlantManagerText>
        
        <PlantManagerButton to="/demonstracao">
          <FaCalendarAlt />
          Agendar Visita
        </PlantManagerButton>
      </PlantManagerContent>
    </PlantManagerContainer>
  );
};

export default PlantManagerSection;