# Guia de Gerenciamento de Assets para o Website Vega Copilot

## Criando a Estrutura de Diretórios Necessária

Para corrigir os erros de assets ausentes, você precisa criar a estrutura de diretórios adequada e adicionar os arquivos de imagem necessários.

1. Crie a seguinte estrutura de diretórios em seu projeto:

```
src/
└── assets/
    ├── images/
    │   ├── industrial-automation.jpg
    │   ├── client-testimonial.jpg
    │   ├── vega-robotics-logo-light.svg
    │   ├── vega-robotics-logo.svg
    │   └── vega-icon.svg
    └── parceiros/
        ├── indab.png
        ├── komatsu.png
        ├── caterpillar.png
        ├── mahle.png
        ├── copaj.png
        ├── nvidia.png
        └── unicamp.png
```

2. Adicione os arquivos de logo da sua empresa nos locais apropriados. Se você ainda não tem os arquivos exatos, pode:

   - Criar SVGs de placeholder para os arquivos de logo
   - Usar imagens de placeholder temporariamente
   - Criar versões simplificadas de seus logos

## Usando Imagens de Placeholder em Seu Código (Solução Temporária)

Enquanto você está criando ou obtendo os assets reais, você pode usar imagens de placeholder em seu código, como mostrado nos componentes corrigidos. Essas URLs de placeholder podem ser substituídas por seus assets reais quando estiverem disponíveis:

```javascript
// Exemplo para imagens de placeholder
const logoLight = 'https://via.placeholder.com/200x50?text=Vega+Robotics';
const logoDark = 'https://via.placeholder.com/200x50?text=Vega+Robotics'; 
const logoMobile = 'https://via.placeholder.com/40x40?text=V';

// Para logos de parceiros
const logoIndab = 'https://via.placeholder.com/150x60?text=INDAB';
```

## Boas Práticas para Gerenciamento de Assets em React

1. **Convenções de nomenclatura consistentes**: Use kebab-case (logo-dark.svg) ou camelCase (logoDark.svg) de maneira consistente.

2. **Otimize assets de imagem**:
   - Comprima imagens JPG/PNG
   - Use formatos apropriados (SVG para logos, WebP para fotos quando suportado)
   - Considere múltiplas resoluções para design responsivo

3. **Importe assets diretamente**: O bundler do React lidará com os caminhos corretamente.
   ```javascript
   import logoLight from 'caminho/para/logo-light.svg';
   ```

4. **Considere carregamento preguiçoso (lazy loading)**: Para imagens mais abaixo na página, considere implementar lazy loading.

5. **Use a pasta public para assets estáticos**: Para assets que não precisam ser processados pelo bundler, coloque-os na pasta `public` e referencie-os com caminhos absolutos:
   ```javascript
   <img src="/images/logo.svg" alt="Logo" />
   ```

## Tipos de Assets e Recomendações

| Tipo de Asset | Formato Recomendado | Observações |
|------------|-------------------|-------|
| Logos e Ícones | SVG | Escalável, tamanho de arquivo pequeno |
| Fotos | WebP/JPG | Otimize para web |
| Imagens de Produto | PNG/WebP | Use PNG se precisar de transparência |
| Imagens de Fundo | JPG/WebP | Comprima adequadamente |

Seguindo estas diretrizes, você terá uma estrutura de assets bem organizada que é fácil de manter e atualizar.