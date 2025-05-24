// src/modules/Home/containers/EcosystemSection/index.js
import React from 'react';
import {
  EcosystemContainer,
  EcosystemContent,
  EcosystemTitle,
  EcosystemSubtitle,
  PartnersGrid,
  PartnerCard,
  PartnerLogo,
  PartnerBadge,
  PartnerDescription,
  EcosystemCTA,
  CTAButton
} from './styles';

import { FaExternalLinkAlt } from 'react-icons/fa';

const EcosystemSection = () => {
  // Parceiros estratégicos baseados no Vega Copilot
  const partners = [
    {
      id: 'sap',
      name: 'SAP',
      logo: 'https://via.placeholder.com/200x80?text=SAP+Partner&color=0073e6&background=f8f9fa',
      badge: 'Certified Partner',
      description: 'Integração nativa com SAP ERP e SAP S/4HANA para gestão completa de ativos industriais.',
      tier: 'platinum'
    },
    {
      id: 'oracle',
      name: 'Oracle',
      logo: 'https://via.placeholder.com/200x80?text=Oracle+Partner&color=f80000&background=f8f9fa',
      badge: 'Technology Partner',
      description: 'Conectividade avançada com Oracle ERP Cloud e Oracle Manufacturing para Industry 4.0.',
      tier: 'platinum'
    },
    {
      id: 'siemens',
      name: 'Siemens',
      logo: 'https://via.placeholder.com/200x80?text=Siemens&color=009999&background=f8f9fa',
      badge: 'Solution Partner',
      description: 'Integração com Siemens MindSphere e Digital Factory para automação industrial completa.',
      tier: 'gold'
    }
  ];

  return (
    <EcosystemContainer>
      <EcosystemContent>
        <EcosystemTitle>
          Ecossistema robusto para uma manutenção sem silos.
        </EcosystemTitle>
        
        <EcosystemSubtitle>
          Integrações nativas com os principais ERPs e sistemas de gestão industrial do mercado.
        </EcosystemSubtitle>

        <PartnersGrid>
          {partners.map((partner, index) => (
            <PartnerCard 
              key={partner.id}
              className="animate-on-scroll"
              tier={partner.tier}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PartnerLogo src={partner.logo} alt={partner.name} />
              <PartnerBadge tier={partner.tier}>
                {partner.badge}
              </PartnerBadge>
              <PartnerDescription>
                {partner.description}
              </PartnerDescription>
            </PartnerCard>
          ))}
        </PartnersGrid>

        <EcosystemCTA>
          <h3>Pronto para integrar com seu sistema atual?</h3>
          <p>
            Nossa equipe técnica especializada pode implementar a integração 
            com qualquer ERP ou sistema MES em até 4 semanas.
          </p>
          <CTAButton to="/demonstracao">
            Solicitar Integração
            <FaExternalLinkAlt />
          </CTAButton>
        </EcosystemCTA>
      </EcosystemContent>
    </EcosystemContainer>
  );
};

export default EcosystemSection;