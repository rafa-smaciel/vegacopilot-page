import React, { useState } from "react";
import logoVega from "../../assets/logoVega.svg";
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Container, LeftSide, WelcomeText, Form, Button } from './styles';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

const Login = ({ onLogin, credentials }) => {
  const [client, setClient] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Função para prevenir o comportamento padrão do mouse durante o evento
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Função para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials) {
      console.error("Credentials prop is missing.");
      alert("Erro de sistema: credenciais não fornecidas.");
      return;
    }

    const { client: correctClient, password: correctPassword } = credentials;

    if (client === correctClient && password === correctPassword) {
      console.log('Login bem-sucedido');
      onLogin(); // Informa que o usuário está logado
    } else {
      console.log('Credenciais inválidas');
      alert('Cliente ou senha inválidos');
    }
  };

  return (
    <Container>
      <LeftSide>
        <img src={logoVega} alt="logo-vegarobotics" />
        <WelcomeText>
          Faça seu Login <br />
          na plataforma
        </WelcomeText>
      </LeftSide>
      <Form onSubmit={handleSubmit}>
        <FormControl variant="outlined" sx={{ m: 1, width: '100%' }}>
          <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
          <OutlinedInput
            id="outlined-adornment-login"
            type="text"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            label="Login"
          />
        </FormControl>

        <FormControl variant="outlined" sx={{ m: 1, width: '100%' }}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button type="submit">
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;