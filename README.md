# ShowPulse

Bem-vindo ao ShowPulse! Aqui você encontra um catálogo variado de shows, com informações sobre datas, locais, preços e ingressos disponíveis.

## Sobre o Projeto

O ShowPulse é uma aplicação web simples e eficaz com o objetivo de centralizar informações sobre shows. A experiência do usuário é priorizada, com funcionalidades que incluem:

- **Login de Usuário**: Acesso protegido por autenticação JWT, garantindo que apenas usuários logados possam visualizar as informações.
- **Página de Shows**: Lista detalhada dos shows disponíveis, incluindo nome, local, data, preço e quantidade de ingressos.
- **Busca de Shows**: Função que permite ao usuário pesquisar shows específicos por nome.
- **Segurança**: Todas as rotas da API de shows são protegidas por autenticação.

## Funcionalidades Principais

- **Login e Autenticação**: Apenas usuários logados podem acessar as páginas e APIs de shows.
- **Home**: Mostra o próximo show daqui a um mês e abaixo tem um carrossel de imagens em array.
- **Exibição de Shows**: Mostra os shows cadastrados no sistema, com informações detalhadas como data, local e preço.
- **Busca de Shows**: Permite ao usuário buscar shows específicos pelo nome com um prompt, exibindo os resultados diretamente na página.
- **Análises**: É apresentando dois gráficos dinâmicos usando Chart.js.
- **Contato**: Possui um formulário para entrar em contato que depois de respondido mostra um alert e redireciona o usuário para a home.
- **Sobre Nós**: Mostra uma pequena mensagem na tela sobre a ShowPulse.
- **Navegação Intuitiva**: Um menu de navegação simples para acesso rápido às páginas principais.

## Como Executar o Projeto

Para executar o projeto na sua máquina, siga os seguintes passos:

### Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
- **Editor de Código**: Recomenda-se o uso do [VSCode](https://code.visualstudio.com/) ou qualquer editor de sua preferência.
- **Terminal de Comando**: Use o terminal para executar os comandos.

### Passos

1. Clone este repositório.

2. No terminal, navegue até o diretório raiz do projeto e execute o comando para instalar as dependências:

- npm install

4. Após a instalação, inicie o servidor com o comando:

- npx nodemon server.js

6. O projeto será executado no endereço http://localhost:3000.

7. A primeira página será a de Login e para logar e ter acesso ao site é preciso pegar o username e a senha do “users.json” que se encontra dentro da pasta “data”. Depois de entrar com as credenciais o site estará funcionando normalmente.

## Bibliotecas JS Utilizadas

- **Express.js**: Framework web para Node.js para criação do servidor e roteamento.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **JWT (JsonWebToken)**: Para autenticação segura dos usuários.
- **Chart.js**: Biblioteca para criação de gráficos dinâmicos e interativos.
- **Body-Parser**: Middleware para processamento de requisições JSON.
- **Cors**: Habilita o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing).

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no backend.
- **Express.js**: Framework para criação do servidor e rotas.
- **JSON**: Utilizado como "banco de dados" para armazenar as informações dos usuários e shows.
- **HTML/CSS/JavaScript**: Usados para criar as páginas e interações do frontend.
