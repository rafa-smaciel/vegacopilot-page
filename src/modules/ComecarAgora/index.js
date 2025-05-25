// src/modules/ComecarAgora/index.js
// eslint-disable-line no-unused-vars
import React from 'react';
import { 
  Container, 
  HeaderSection,
  FormSection,
  FormContainer,
  FormTitle,
  FormSubtitle,
  StyledForm,
  InputGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
  InfoSection,
  InfoTitle,
  InfoContent,
  InfoItem,
  InfoIcon,
  InfoText
} from './styles';
import { FaCheck, FaRocket, FaCogs, FaUsersCog, FaChartLine } from 'react-icons/fa';

const ComecarAgora = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
  };

  return (
    <Container>
      <HeaderSection>
        <h1>Comece Agora com o Vega Copilot</h1>
        <p>Preencha o formulário abaixo para iniciar sua jornada para uma produção industrial mais eficiente</p>
      </HeaderSection>

      <FormSection>
        <FormContainer>
          <FormTitle>Solicite sua implementação</FormTitle>
          <FormSubtitle>Nossa equipe entrará em contato em até 24 horas úteis</FormSubtitle>
          
          <StyledForm onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Nome Completo</Label>
              <Input type="text" id="name" name="name" required placeholder="Seu nome completo" />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="company">Empresa</Label>
              <Input type="text" id="company" name="company" required placeholder="Nome da sua empresa" />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="role">Cargo</Label>
              <Input type="text" id="role" name="role" required placeholder="Seu cargo na empresa" />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" name="email" required placeholder="email@empresa.com.br" />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="phone">Telefone</Label>
              <Input type="tel" id="phone" name="phone" required placeholder="(11) 99999-9999" />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="industry">Setor Industrial</Label>
              <Select id="industry" name="industry" required>
                <option value="">Selecione o setor</option>
                <option value="automotive">Automotivo</option>
                <option value="metallurgy">Metalurgia</option>
                <option value="heavy-machinery">Máquinas Pesadas</option>
                <option value="manufacturing">Manufatura</option>
                <option value="logistics">Logística</option>
                <option value="other">Outro</option>
              </Select>
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="employees">Número de Funcionários</Label>
              <Select id="employees" name="employees" required>
                <option value="">Selecione o tamanho da empresa</option>
                <option value="1-50">1-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1001+">1001+</option>
              </Select>
            </InputGroup>
            
            <InputGroup fullWidth>
              <Label htmlFor="message">Conte-nos sobre seus desafios</Label>
              <TextArea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder="Descreva os principais desafios que enfrenta em sua produção industrial..."
              ></TextArea>
            </InputGroup>
            
            <SubmitButton type="submit">Solicitar Implementação</SubmitButton>
          </StyledForm>
        </FormContainer>

        <InfoSection>
          <InfoTitle>Por que escolher o Vega Copilot?</InfoTitle>
          
          <InfoContent>
            <InfoItem>
              <InfoIcon>
                <FaRocket />
              </InfoIcon>
              <InfoText>
                <h3>Implementação Rápida</h3>
                <p>Solução operacional em apenas 4 semanas, com mínima interrupção em sua produção.</p>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaCheck />
              </InfoIcon>
              <InfoText>
                <h3>ROI Comprovado</h3>
                <p>Retorno do investimento em média de 7 meses, com redução de até 30% em paradas não planejadas.</p>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaCogs />
              </InfoIcon>
              <InfoText>
                <h3>Integração com Sistemas Existentes</h3>
                <p>Compatibilidade com suas tecnologias atuais, sem necessidade de substituição completa.</p>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaUsersCog />
              </InfoIcon>
              <InfoText>
                <h3>Suporte Técnico Especializado</h3>
                <p>Equipe de engenheiros dedicados para garantir o sucesso da implementação e operação.</p>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaChartLine />
              </InfoIcon>
              <InfoText>
                <h3>Melhoria Contínua</h3>
                <p>Sistema que aprende e se adapta constantemente, oferecendo resultados cada vez melhores.</p>
              </InfoText>
            </InfoItem>
          </InfoContent>
        </InfoSection>
      </FormSection>
    </Container>
  );
};

export default ComecarAgora;