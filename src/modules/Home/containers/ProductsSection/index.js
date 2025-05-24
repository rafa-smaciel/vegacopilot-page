// src/modules/Home/containers/ProductsSection/index.js
import React from 'react';
import {
  ProductsContainer,
  ProductsHeader,
  ProductsTitle,
  ProductsSubtitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductBadge,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductFeatures,
  ProductCTA,
  ProductIcon
} from './styles';

import { 
  FaEye, 
  FaMicrochip, 
  FaBolt,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

const ProductsSection = () => {
  // Produtos baseados no Vega Copilot (adaptando os da Tractian)
  const products = [
    {
      id: 'vega-copilot',
      image: 'https://via.placeholder.com/400x300?text=Vega+Copilot+AIoT',
      badge: 'MONITORAMENTO',
      icon: <FaEye />,
      title: 'Vega Copilot',
      subtitle: 'Sistema de IA Embarcada',
      description: 'Monitore a condição dos ativos: preveja falhas, evite paradas inesperadas e reduza custos operacionais com IA explicável.',
      features: [
        'Monitoramento contínuo 24/7',
        'Análise preditiva com IA explicável', 
        'Detecção precoce de anomalias',
        'Dashboard em tempo real',
        'Alertas inteligentes personalizados'
      ],
      cta: 'Monitore seus ativos',
      link: '/solucoes#vega-copilot'
    },
    {
      id: 'device-vega',
      image: 'https://via.placeholder.com/400x300?text=Device+Vega+Hardware',
      badge: 'HARDWARE CMMS',
      icon: <FaMicrochip />,
      title: 'Device Vega™',
      subtitle: 'Hardware Industrial Robusto',
      description: 'Gestão de manutenção e confiabilidade: registre cada tarefa e gerencie dados em tempo real com inteligência artificial.',
      features: [
        'Hardware proprietário para indústria',
        'Processador NVIDIA Jetson embarcado',
        'Resistente a ambientes adversos',
        'Conectividade industrial nativa',
        'Câmeras e sensores integrados'
      ],
      cta: 'Conheça o hardware',
      link: '/solucoes#device-vega'
    },
    {
      id: 'energy-efficiency',
      image: 'https://via.placeholder.com/400x300?text=Energy+Efficiency+AI',
      badge: 'EFICIÊNCIA ENERGÉTICA',
      icon: <FaBolt />,
      title: 'Energy Efficiency',
      subtitle: 'IA para Sustentabilidade',
      description: 'Eficiência energética com inteligência de dados: transforme consumo energético em lucros com IA sustentável.',
      features: [
        'Monitoramento de consumo em tempo real',
        'IA para otimização energética',
        'Análise preditiva de eficiência',
        'Relatórios de sustentabilidade ESG',
        'Redução garantida de custos'
      ],
      cta: 'Economize energia',
      link: '/solucoes#energy-efficiency'
    }
  ];

  return (
    <ProductsContainer>
      <ProductsHeader>
        <ProductsTitle>Gestão de ativos movida por inteligência de dados.</ProductsTitle>
        <ProductsSubtitle>
          As melhores ferramentas de gerenciamento da performance dos ativos para máxima 
          disponibilidade da sua indústria.
        </ProductsSubtitle>
      </ProductsHeader>

      <ProductsGrid>
        {products.map((product, index) => (
          <ProductCard key={product.id} className="animate-on-scroll">
            <ProductImage src={product.image} alt={product.title} />
            <ProductBadge>{product.badge}</ProductBadge>
            <ProductInfo>
              <ProductIcon>{product.icon}</ProductIcon>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              
              <ProductFeatures>
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <FaCheck />
                    {feature}
                  </li>
                ))}
              </ProductFeatures>

              <ProductCTA to={product.link}>
                {product.cta}
                <FaArrowRight />
              </ProductCTA>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default ProductsSection;