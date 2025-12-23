# Teste técnico - Desenvolvedor Frontend Rede Lius

## 1. Instruções para rodar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- npm

### Passos para execução

```bash
npm install
npm run dev
```

Após isso, a aplicação estará disponível em http://localhost:5173


## 2. Quais partes testar com testes automatizados?

Priorizaria as partes com lógica de negócio e comportamento como a filtragem de usuários, renderização condicional da lista de usuários e tratamento de estados.

## 3. Quais tipos de testes seriam utilizados?

- Testes unitários: funções puras e componentes simples como o Search Input e StatusFilter.
- Testes de integração: fluxo completo da tela (busca por nome/email mais o filtro de status, estados de carregamento, erro e lista vazia).
- Testes E2E: Para esse caso simples, não vejo necessidade em testar os cenários de uso do usuário, pois já é contemplado nos outros casos.

## 4. O que não seria testado?

Estilos visuais, implementação de bibliotecas externas, detalhes de layout, etc. Manteria o foco dos testes automatizados no comportamento e regras de negócio.

## 5. Possíveis melhorias

- Adicionar paginação ou scroll infinito.
- Separar os estilos do código principal (por exemplo CSS Modules ou Styled Components).
- Melhorar o tratamento de erro para ficar mais detalhado, implementar retry e cache de requisições.
- Estilização e responsividade.
- Adicionar um debounce em SearchInput para ele chamar o método onChange após algum tempo (0.5s por exemplo) sem mudanças, para que não ocorra renderizaçoes intermediárias desnecessárias.

