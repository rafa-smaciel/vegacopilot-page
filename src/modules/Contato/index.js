// src/modules/Contato/index.js
import React, { useState } from 'react';
import {
  Container,
  HeaderSection,
  ContactSection,
  FormContainer,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  ContactItems,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactLabel,
  ContactValue,
  SocialLinks,
  SocialLink,
  FormTitle,
  StyledForm,
  InputGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage
} from './styles';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';

const Contato = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
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
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Esconder a mensagem após 5 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <Container>
      <HeaderSection>
        <h1>Entre em Contato</h1>
        <p>Estamos prontos para ajudar a transformar sua operação industrial</p>
      </HeaderSection>

      <ContactSection>
        <FormContainer>
          <FormTitle>Envie sua mensagem</FormTitle>
          {showSuccess && (
            <SuccessMessage>
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </SuccessMessage>
          )}
          <StyledForm onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Nome completo</Label>
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
              <Label htmlFor="email">E-mail</Label>
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
              <Label htmlFor="phone">Telefone</Label>
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
              <Label htmlFor="subject">Assunto</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formState.subject}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <InputGroup fullWidth>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea 
                id="message" 
                name="message" 
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
          </StyledForm>
        </FormContainer>

        <ContactInfo>
          <ContactTitle>Informações de Contato</ContactTitle>
          <ContactDescription>
            Entre em contato conosco para obter mais informações sobre como nossas soluções podem transformar sua operação industrial.
          </ContactDescription>
          
          <ContactItems>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Endereço</ContactLabel>
                <ContactValue>Av. Paulista, 1000 - São Paulo, SP</ContactValue>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Telefone</ContactLabel>
                <ContactValue>11-95009-1919</ContactValue>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <ContactLabel>E-mail</ContactLabel>
                <ContactValue>vega@vegarobotics.com.br</ContactValue>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaClock />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Horário de Atendimento</ContactLabel>
                <ContactValue>Segunda a Sexta: 8h às 18h</ContactValue>
              </ContactText>
            </ContactItem>
          </ContactItems>
          
          <SocialLinks>
            <SocialLink href="https://wa.me/5511950091919" target="_blank" rel="noreferrer" whatsapp>
              <FaWhatsapp />
            </SocialLink>
            <SocialLink href="https://linkedin.com/company/vega-robotics" target="_blank" rel="noreferrer" linkedin>
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://instagram.com/vega.robotics" target="_blank" rel="noreferrer" instagram>
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://youtube.com/c/VegaRobotics" target="_blank" rel="noreferrer" youtube>
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
      </ContactSection>
    </Container>
  );
};

export default Contato;