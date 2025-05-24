// src/modules/Empresa/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  
  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    max-width: 700px;
    
    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

export const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
  
  @media (min-width: 1900px) {
    max-width: 1400px;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const AboutText = styled.div`
  flex: 1;
  
  h2 {
    font-size: 2rem;
    color: #1a1a2e;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    
    strong {
      color: #e31937;
      font-weight: 600;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ValuesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f3f4f6;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const ValuesTitle = styled.h2`
  font-size: 2.25rem;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 1900px) {
    max-width: 1400px;
  }
`;

export const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ValueIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e31937;
  color: white;
  margin-bottom: 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ValueTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
`;

export const ValueDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
`;

export const TeamSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const TeamTitle = styled.h2`
  font-size: 2.25rem;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 1900px) {
    max-width: 1400px;
  }
`;

export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const MemberImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const MemberInfo = styled.div`
  padding: 1.5rem;
`;

export const MemberName = styled.h3`
  font-size: 1.25rem;
  color: #1a1a2e;
  margin-bottom: 0.25rem;
`;

export const MemberRole = styled.h4`
  font-size: 1rem;
  color: #e31937;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const MemberBio = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
`;

export const PartnershipsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const PartnershipsTitle = styled.h2`
  font-size: 2.25rem;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const PartnershipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 1900px) {
    max-width: 1200px;
  }
`;

export const PartnershipCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const PartnershipLogo = styled.img`
  height: 80px;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const PartnershipName = styled.h3`
  font-size: 1.25rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
`;

export const PartnershipDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
`;