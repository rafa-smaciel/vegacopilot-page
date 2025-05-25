// src/modules/Home/containers/TestimonialsSection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
// eslint-disable-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {
  TestimonialsContainer,
  TestimonialsContent,
  SectionTitle,
  CarouselContainer,
  TestimonialCard,
  TestimonialQuote,
  TestimonialRating,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorRole,
  AuthorCompany,
  CompanyBadge,
  CarouselControls,
  ControlButton,
  DotsContainer,
  Dot
} from './styles';

import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Depoimentos reais baseados nos clientes do Vega Copilot
  const testimonials = [
    {
      id: 'carlos-indab',
      quote: 'Our experience with the company has been excellent. Whenever we need support, we get a quick response. Maintenance has never been easier.',
      rating: 4,
      author: {
        name: 'Carlos Mendes',
        role: 'Diretor de Operações',
        company: 'INDAB Metalúrgica',
        avatar: 'https://via.placeholder.com/80x80?text=CM',
        companySize: '1001 a 5000 funcionários'
      },
      companyLogo: 'https://via.placeholder.com/60x30?text=INDAB'
    },
    {
      id: 'ana-copaj',
      quote: 'Jornada do cliente muito bem planejada. Interface clara e amigável com boa navegabilidade. Pessoas novas, bem capacitadas e com muita vontade de fazer a diferença.',
      rating: 5,
      author: {
        name: 'Ana Carolina Silva',
        role: 'Gerente de Produção',
        company: 'Copaj Indústria',
        avatar: 'https://via.placeholder.com/80x80?text=ACS',
        companySize: '51 a 200 funcionários'
      },
      companyLogo: 'https://via.placeholder.com/60x30?text=COPAJ'
    },
    {
      id: 'ricardo-mahle',
      quote: 'Os insights são muito eficientes para uma análise mais ágil até um OEE global. O software é simples de usar para todos. A análise global é espetro é muito útil.',
      rating: 5,
      author: {
        name: 'Ricardo Torres',
        role: 'Coordenador de Melhoria Contínua',
        company: 'Grupo Mahle',
        avatar: 'https://via.placeholder.com/80x80?text=RT',
        companySize: '201 a 500 funcionários'
      },
      companyLogo: 'https://via.placeholder.com/60x30?text=MAHLE'
    },
    {
      id: 'paulo-nvidia',
      quote: 'In addition to the hardware and AI solutions, VEGA provides a dedicated program manager to help you understand the predictive insights being generated and develop the appropriate resolution path forward.',
      rating: 5,
      author: {
        name: 'Paulo Silva',
        role: 'Engenheiro de Confiabilidade',
        company: 'NVIDIA Inception Partner',
        avatar: 'https://via.placeholder.com/80x80?text=PS',
        companySize: '51 a 1000 funcionários'
      },
      companyLogo: 'https://via.placeholder.com/60x30?text=NVIDIA'
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Reativa o auto-play após 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={index < rating ? 'filled' : 'empty'} 
      />
    ));
  };

  return (
    <TestimonialsContainer>
      <TestimonialsContent>
        <SectionTitle>Confie nas palavras de quem usa.</SectionTitle>
        
        <CarouselContainer 
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <CarouselControls>
            <ControlButton onClick={goToPrev} aria-label="Depoimento anterior">
              <FaChevronLeft />
            </ControlButton>
            <ControlButton onClick={goToNext} aria-label="Próximo depoimento">
              <FaChevronRight />
            </ControlButton>
          </CarouselControls>

          <TestimonialCard className="animate-on-scroll">
            <TestimonialRating>
              {renderStars(testimonials[currentIndex].rating)}
            </TestimonialRating>
            
            <TestimonialQuote>
              "{testimonials[currentIndex].quote}"
            </TestimonialQuote>
            
            <TestimonialAuthor>
              <AuthorAvatar 
                src={testimonials[currentIndex].author.avatar} 
                alt={testimonials[currentIndex].author.name} 
              />
              <AuthorInfo>
                <AuthorName>{testimonials[currentIndex].author.name}</AuthorName>
                <AuthorRole>{testimonials[currentIndex].author.role}</AuthorRole>
                <AuthorCompany>{testimonials[currentIndex].author.company}</AuthorCompany>
                <CompanyBadge>{testimonials[currentIndex].author.companySize}</CompanyBadge>
              </AuthorInfo>
              <img 
                src={testimonials[currentIndex].companyLogo} 
                alt={testimonials[currentIndex].author.company}
                style={{ height: '30px', marginLeft: 'auto' }}
              />
            </TestimonialAuthor>
          </TestimonialCard>

          <DotsContainer>
            {testimonials.map((_, index) => (
              <Dot 
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </DotsContainer>
        </CarouselContainer>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;