// src/modules/Home/containers/NewsSection/index.js
import React from 'react';
import {
  NewsContainer,
  NewsContent,
  NewsHeader,
  NewsTitle,
  NewsSubtitle,
  NewsGrid,
  NewsCard,
  NewsImage,
  NewsBadge,
  NewsCardContent,
  NewsCardTitle,
  NewsCardDescription,
  NewsButton,
  NewsFooter,
  NewsFooterLink
} from './styles';

import { FaArrowRight } from 'react-icons/fa';

const NewsSection = () => {
  // Novidades baseadas nos desenvolvimentos reais do Vega Copilot
  const newsItems = [
    {
      id: 'multi-insights',
      image: 'https://via.placeholder.com/400x250?text=Análise+Múltiplos+Insights',
      badge: '5 dias atrás',
      title: 'Análise de múltiplos insights em uma única inspeção',
      description: 'Melhoramos o aprendizado da Inteligência Artificial e o fluxo de funcionalidades da plataforma para aumentar a participação do seu time no processo de gerenciamento de falhas...',
      link: '/novidades/analise-multiplos-insights'
    },
    {
      id: 'work-order-planning',
      image: 'https://via.placeholder.com/400x250?text=Planejamento+Ordens+Serviço',
      badge: '174 dias atrás',
      title: 'Planejamento e Programação de Ordens de Serviço',
      description: 'Com a funcionalidade de Atividades, você tem à disposição uma ferramenta que oferece controle total sobre as ordens de serviço, garantindo organização, precisão e uma comunic...',
      link: '/novidades/planejamento-ordens-servico'
    },
    {
      id: 'optimized-routes',
      image: 'https://via.placeholder.com/400x250?text=Rotas+Otimizadas+App',
      badge: '174 dias atrás',
      title: 'Rotas Otimizadas para Técnicos no App',
      description: 'O Vega App agora oferece recursos aprimorados para simplificar o fluxo de trabalho dos técnicos e melhorar o acompanhamento das atividades. Os gestores podem monitorar as...',
      link: '/novidades/rotas-otimizadas-app'
    }
  ];

  return (
    <NewsContainer>
      <NewsContent>
        <NewsHeader>
          <NewsTitle>Desenvolvido para as exigências da indústria.</NewsTitle>
          <NewsSubtitle>
            Confira as mais recentes novidades e atualizações dos nossos produtos.
          </NewsSubtitle>
        </NewsHeader>

        <NewsGrid>
          {newsItems.map((item, index) => (
            <NewsCard key={item.id} className="animate-on-scroll">
              <NewsImage src={item.image} alt={item.title} />
              <NewsBadge>{item.badge}</NewsBadge>
              <NewsCardContent>
                <NewsCardTitle>{item.title}</NewsCardTitle>
                <NewsCardDescription>{item.description}</NewsCardDescription>
                <NewsButton to={item.link}>
                  Leia mais
                  <FaArrowRight />
                </NewsButton>
              </NewsCardContent>
            </NewsCard>
          ))}
        </NewsGrid>

        <NewsFooter>
          <NewsFooterLink to="/novidades">
            Novas funcionalidades, atualizações e correções
            <FaArrowRight />
          </NewsFooterLink>
        </NewsFooter>
      </NewsContent>
    </NewsContainer>
  );
};

export default NewsSection;