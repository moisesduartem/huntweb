# ReactJS

Lib. para facilitar a manipulação da DOM.
O front-end consome os dados do back-end via requisições assíncronas,
permitindo uma melhor separação das partes do projeto e trazendo mais liberdade para trabalhar
a interatividade da aplicação.

- Sintaxe
    - A lib. utiliza JSX, uma sintaxe que permite manipular com mais facilidade a DOM do HTML através de JavaScript.

- Estrutura
 - public/ 
    - Aqui ficará tudo que é acessível pelo usuário final da aplicação.
- src/ 
 - Aqui é onde ficará todo o código da lógica da aplicação.
 - package.json
    - Aqui ficarão as dependências.
    - react: Reactjs em si.
    - react-dom: Renderização do React para web.
    - react-scripts: Transpilação de códigos mais novos para mais antigos.
    - "scripts" => Comandos para serem realizados.

- Explicando alguns conceitos básicos...
    - index.js => Primeiro arquivo aberto pela aplicação.
    - Sempre lembrar de fazer os imports e exports.
    - O ReactDOM.render só será usado UMA vez (para renderizar toda a aplicação).
    - Componente => pedaço isolado de lógica, estrutura. (precisa obrigatoriamente retornar um conteúdo dentro do método/função render())