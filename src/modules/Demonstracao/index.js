// src/modules/Demonstracao/index.js
import React, { useState } from 'react';
import {
  Container,
  HeaderSection,
  DemoSection,
  FormContainer,
  BenefitsContainer,
  FormTitle,
  StyledForm,
  InputGroup,
  Label,
  Input,
  Select,
  TextArea,
  Checkbox,
  CheckboxLabel,
  SubmitButton,
  SuccessMessage,
  BenefitsTitle,
  BenefitsList,
  BenefitItem,
  BenefitIcon,
  BenefitContent,
  BenefitHeading,
  BenefitText,
  DemoVideo,
  VideoContainer,
  VideoTitle,
  VideoDescription,
  VideoFrame,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureHeading,
  FeatureText
} from './styles';
import {
  FaCheckCircle,
  FaChartLine,
  FaTools,
  FaRobot,
  FaClock,
  FaMoneyBillWave,
  FaShieldAlt,
  FaBrain,
  FaWrench,
  FaFileAlt
} from 'react-icons/fa';

const Demonstracao = () => {
  const [formState, setFormState] = useState({
    name: '',
    position: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    challenges: '',
    contact_method: 'email',
    agree_terms: false
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
    setFormState({
      ...formState,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria lógica para enviar o formulário
    console.log('Formulário enviado:', formState);
    // Simular sucesso após envio
    setShowSuccess(true);
    // Limpar o formulário
    setFormState({
      name: '',
      position: '',
      company: '',
      email: '',
      phone: '',
      industry: '',
      challenges: '',
      contact_method: 'email',
      agree_terms: false
    });
    // Esconder a mensagem após 5 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const benefits = [
    {
      icon: <FaRobot />,
      title: 'Demonstração Personalizada',
      text: 'Nossa equipe desenvolverá uma demonstração específica para os desafios da sua indústria.'
    },
    {
      icon: <FaTools />,
      title: 'Análise de Compatibilidade',
      text: 'Avaliação técnica para garantir a integração perfeita com seus sistemas atuais.'
    },
    {
      icon: <FaChartLine />,
      title: 'Estimativa de ROI',
      text: 'Projeção detalhada do retorno sobre investimento baseada na sua operação específica.'
    },
    {
      icon: <FaClock />,
      title: 'Implementação Rápida',
      text: 'Plano detalhado para implantação em apenas 4 semanas, minimizando interrupções.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Proposta Personalizada',
      text: 'Cotação adaptada ao tamanho e necessidades específicas do seu negócio.'
    }
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Processamento Local',
      text: 'Todos os dados são processados localmente no dispositivo, garantindo maior segurança e privacidade.'
    },
    {
      icon: <FaBrain />,
      title: 'IA Explicável',
      text: 'Algoritmos de IA transparentes que mostram claramente os motivos das decisões tomadas.'
    },
    {
      icon: <FaWrench />,
      title: 'Integração Flexível',
      text: 'Compatível com sistemas MES, ERP e protocolos industriais padrão como OPC-UA e MQTT.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Documentação Completa',
      text: 'Fornecemos documentação detalhada e treinamento para sua equipe técnica e operacional.'
    }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Solicite uma Demonstração</h1>
        <p>Veja como o Vega Copilot pode transformar sua operação industrial</p>
      </HeaderSection>

      <DemoSection>
        <FormContainer>
          <FormTitle>Preencha os detalhes para agendar</FormTitle>
          {showSuccess && (
            <SuccessMessage>
              Solicitação enviada com sucesso! Nossa equipe entrará em contato em até 24 horas para agendar sua demonstração.
            </SuccessMessage>
          )}
          <StyledForm onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Nome completo*</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="position">Cargo*</Label>
              <Input 
                type="text" 
                id="position" 
                name="position" 
                value={formState.position}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="company">Empresa*</Label>
              <Input 
                type="text" 
                id="company" 
                name="company" 
                value={formState.company}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="email">E-mail corporativo*</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="phone">Telefone*</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formState.phone}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="industry">Setor Industrial*</Label>
              <Select 
                id="industry" 
                name="industry" 
                value={formState.industry}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="automotive">Automotivo</option>
                <option value="metallurgy">Metalurgia</option>
                <option value="heavy-machinery">Máquinas Pesadas</option>
                <option value="manufacturing">Manufatura</option>
                <option value="logistics">Logística</option>
                <option value="chemical">Indústria Química</option>
                <option value="other">Outro</option>
              </Select>
            </InputGroup>
            
            <InputGroup fullWidth>
              <Label htmlFor="challenges">Descreva os principais desafios da sua operação*</Label>
              <TextArea 
                id="challenges" 
                name="challenges" 
                rows={4}
                value={formState.challenges}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <InputGroup fullWidth>
              <Label>Método de contato preferido*</Label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div>
                  <input 
                    type="radio" 
                    id="contact_email" 
                    name="contact_method" 
                    value="email"
                    checked={formState.contact_method === 'email'}
                    onChange={handleChange}
                  />
                  <Label htmlFor="contact_email" style={{ marginLeft: '0.5rem' }}>E-mail</Label>
                </div>
                <div>
                  <input 
                    type="radio" 
                    id="contact_phone" 
                    name="contact_method" 
                    value="phone"
                    checked={formState.contact_method === 'phone'}
                    onChange={handleChange}
                  />
                  <Label htmlFor="contact_phone" style={{ marginLeft: '0.5rem' }}>Telefone</Label>
                </div>
                <div>
                  <input 
                    type="radio" 
                    id="contact_whatsapp" 
                    name="contact_method" 
                    value="whatsapp"
                    checked={formState.contact_method === 'whatsapp'}
                    onChange={handleChange}
                  />
                  <Label htmlFor="contact_whatsapp" style={{ marginLeft: '0.5rem' }}>WhatsApp</Label>
                </div>
              </div>
            </InputGroup>
            
            <InputGroup fullWidth>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox 
                  type="checkbox" 
                  id="agree_terms" 
                  name="agree_terms" 
                  checked={formState.agree_terms}
                  onChange={handleChange}
                  required 
                />
                <CheckboxLabel htmlFor="agree_terms">
                  Concordo em receber comunicações sobre produtos e serviços da Vega Robotics
                </CheckboxLabel>
              </div>
            </InputGroup>
            
            <SubmitButton type="submit">Solicitar Demonstração</SubmitButton>
          </StyledForm>
        </FormContainer>

        <BenefitsContainer>
          <BenefitsTitle>O que esperar da nossa demonstração</BenefitsTitle>
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} className="animate-on-scroll">
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitContent>
                  <BenefitHeading>{benefit.title}</BenefitHeading>
                  <BenefitText>{benefit.text}</BenefitText>
                </BenefitContent>
              </BenefitItem>
            ))}
          </BenefitsList>
        </BenefitsContainer>
      </DemoSection>

      <DemoVideo>
        <VideoContainer>
          <VideoTitle>Veja o Vega Copilot em ação</VideoTitle>
          <VideoDescription>
            Assista como o sistema detecta anomalias, processa dados em tempo real e integra-se ao ambiente industrial para fornecer insights acionáveis.
          </VideoDescription>
          <VideoFrame>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Vega Copilot Demo"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </VideoFrame>
          
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index} className="animate-on-scroll">
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <div>
                  <FeatureHeading>{feature.title}</FeatureHeading>
                  <FeatureText>{feature.text}</FeatureText>
                </div>
              </FeatureItem>
            ))}
          </FeatureList>
        </VideoContainer>
      </DemoVideo>
    </Container>
  );
};

export default Demonstracao;