// src/modules/Home/containers/CTAFormSection/index.js
import React, { useState } from 'react';
import {
  CTAContainer,
  CTAContent,
  CTAText,
  CTATitle,
  CTASubtitle,
  CTAForm,
  FormGroup,
  FormRow,
  FormInput,
  FormSelect,
  FormTextarea,
  SubmitButton,
  CTAVisual,
  CTAImage,
  DeviceOverlay,
  DeviceInfo,
  TechBadges,
  TechBadge
} from './styles';

import { 
  FaRocket, 
  FaShieldAlt, 
  FaBrain,
  FaIndustry 
} from 'react-icons/fa';

const CTAFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    company: '',
    industry: '',
    solution: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Form submitted:', formData);
    // Redirect para página de agradecimento ou mostrar mensagem de sucesso
  };

  const industries = [
    'Automotiva',
    'Metalurgia e Siderurgia',
    'Máquinas e Equipamentos',
    'Petróleo e Gás',
    'Alimentos e Bebidas',
    'Química e Petroquímica',
    'Papel e Celulose',
    'Mineração',
    'Logística e Distribuição',
    'Bens de Consumo',
    'Outros'
  ];

  const solutions = [
    'Vega Copilot - IA Embarcada',
    'Device Vega - Hardware Industrial',
    'Energy Efficiency - Sustentabilidade',
    'Integração com ERP/MES',
    'Projetos de Melhoria Contínua',
    'Consultoria em Indústria 4.0',
    'Não sei qual solução preciso'
  ];

  return (
    <CTAContainer>
      <CTAContent>
        <CTAText>
          <CTATitle>
            Cuidamos da disponibilidade, você 
            dos resultados. Descubra como.
          </CTATitle>
          
          <CTASubtitle>
            Solicite uma demonstração personalizada e veja como o Vega Copilot 
            pode transformar sua operação industrial em até 4 semanas.
          </CTASubtitle>

          <CTAForm onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="E-mail profissional"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormInput
                  type="tel"
                  name="phone"
                  placeholder="+55 (11) 9 9999-9999"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormInput
                  type="text"
                  name="position"
                  placeholder="Cargo"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormInput
                type="text"
                name="company"
                placeholder="Empresa"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormSelect
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
              >
                <option value="">Setor da Indústria</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormSelect
                name="solution"
                value={formData.solution}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione a solução de maior interesse</option>
                {solutions.map(solution => (
                  <option key={solution} value={solution}>
                    {solution}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormTextarea
                name="message"
                placeholder="Conte-nos mais sobre seu desafio industrial ou deixe uma mensagem (opcional)"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
              />
            </FormGroup>

            <SubmitButton type="submit">
              <FaRocket />
              Solicitar Demonstração
            </SubmitButton>
          </CTAForm>
        </CTAText>

        <CTAVisual>
          <CTAImage 
            src="https://via.placeholder.com/600x500?text=Vega+Copilot+Setup&color=059669&background=f8fafc" 
            alt="Vega Copilot Device Setup"
          />
          
          <DeviceOverlay>
            <DeviceInfo>
              <h4>Vega Copilot em Operação</h4>
              <p>INDAB Metalúrgica - São Bernardo do Campo/SP</p>
              <span className="status">● Sistema Operacional</span>
            </DeviceInfo>
          </DeviceOverlay>

          <TechBadges>
            <TechBadge>
              <FaBrain />
              <span>IA Explicável</span>
            </TechBadge>
            <TechBadge>
              <FaShieldAlt />
              <span>100% Local</span>
            </TechBadge>
            <TechBadge>
              <FaIndustry />
              <span>Edge Computing</span>
            </TechBadge>
          </TechBadges>
        </CTAVisual>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTAFormSection;