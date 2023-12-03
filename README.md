# Teste prático | Front-End 

Este projeto consiste em criar uma versão simplificada do formulário utilizado no Respondi, com o objetivo de avaliar suas habilidades de desenvolvimento front-end. O formulário proposto possui três tipos de campos: texto simples, e-mail e múltipla escolha. A estrutura e o estilo do formulário devem ser semelhantes ao [exemplo fornecido](https://form.respondi.app/rdYUjiTH).

## Material de Apoio

Você pode inspecionar a versão ao vivo para obter detalhes sobre fontes, tamanhos e outros estilos. A fonte é do [Google Fonts](https://fonts.google.com/), e os ícones são do [Font Awesome](https://fontawesome.com/) (versão gratuita). As imagens de frutas são representadas por emojis.


## API

Há quatro endpoints mockados para consumir, todos acessíveis sem autenticação através da URL base https://65665153eb8bb4b70ef3297d.mockapi.io/api/:

- **GET `/forms`:** Lista todos os formulários disponíveis.
- **GET `/forms/:id`:** Retorna os dados de um formulário específico.
- **POST `/respondents`:** Envia uma nova resposta para um campo. Utilize o formato JSON conforme abaixo:

## Requisitos

- Utilize Vue.js 2 ou Nuxt 2.
- Crie um repositório público no GitHub e faça commits regularmente. Não faça referências ao Respondi no título ou descrição para evitar indexação.
- Adicione um [readme.md](http://read.md) ao projeto com instruções de como rodar pela primeira vez.
- Desenvolva a parte visual do zero, incluindo os três componentes personalizados de formulário e o grid. Não utilize bibliotecas de componentes prontos; queremos avaliar seu código, não o de terceiros.
- Você pode usar bibliotecas externas para outras funcionalidades, como validação.
- Utilizamos SASS como pré-processador, mas sinta-se à vontade para usar o que for mais confortável para você.


## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 

## Configuração do Projeto

```bash
$ git clone https://github.com/joaopedro28/project-form-app

$ cd project-form-app

$ npm install
``` 

## Executando a Aplicação
### Modo de Desenvolvimento:

```bash
$ npm run dev
```

Acesse http://localhost:3000 no seu navegador.


## Estrutura do Projeto

Ao utilizar o Nuxt.js 2 para o desenvolvimento deste projeto, a estrutura do diretório seguirá um padrão específico que facilita a organização e escalabilidade. Abaixo está uma breve explicação de alguns dos diretórios e arquivos principais:

- **`assets/`**: Contém ativos como imagens, estilos e fontes. O conteúdo aqui é processado e tratado pelo webpack.

- **`components/`**: Armazena componentes Vue reutilizáveis em toda a aplicação.

- **`layouts/`**: Define layouts globais para a aplicação, como o layout padrão da página.

- **`pages/`**: O diretório principal para suas páginas Vue.js. Cada arquivo .vue neste diretório corresponde a uma rota na aplicação.

- **`plugins/`**: Contém plugins Vue.js que você deseja injetar na aplicação.

- **`static/`**: Contém arquivos estáticos que não precisam ser processados pelo webpack, como imagens, arquivos JSON, etc.

- **`nuxt.config.js`**: O arquivo de configuração principal do Nuxt.js. Ele pode ser usado para configurar várias opções, como módulos, cabeçalhos, entre outros.

- **`package.json`**: Arquivo de configuração do Node.js que inclui as dependências do projeto, scripts de execução e outras informações.

- **`README.md`**: Documentação do projeto, fornecendo informações sobre como configurar, instalar e executar o projeto.


## Componentes do Projeto

Neste projeto, foram desenvolvidos vários componentes Vue.js que desempenham funções específicas na aplicação. Abaixo, vou explicar alguns dos componentes principais:

### `SideNav.vue`

O componente `SideNav.vue` é responsável por criar a barra de navegação lateral na aplicação, proporcionando uma experiência de navegação intuitiva.

### `ProgressBar.vue`

O componente `ProgressBar.vue` implementa uma barra de progresso, possivelmente indicando o progresso de preenchimento do formulário ou outra interação relevante.

### `Icons.vue`

O componente `Icons.vue` é dedicado à exibição de ícones na aplicação. Pode ser utilizado para representar diferentes elementos ou estados visualmente.

### `Forms.vue`

O componente `Forms.vue` é central na aplicação, gerenciando o formulário principal. Ele provavelmente inclui outros componentes de campo e lida com a lógica de submissão.

- #### `Field.vue`

    O componente `Field.vue` encapsula a lógica comum a todos os campos do formulário. Ele pode conter diferentes tipos de campos:

    - ##### `AnyText.vue`
        Este componente representa um campo de texto simples.

    - ##### `Checkbox.vue`
        Representa um campo de checkbox.

- #### `Message.vue`

    O componente `Message.vue` é responsável por exibir uma mensagem final ou agradecimento após o preenchimento bem-sucedido do formulário.


Esses são alguns dos principais componentes utilizados no projeto. Para obter detalhes específicos sobre a implementação de cada componente, consulte os respectivos arquivos no diretório `components/`.

## Decisões no Desenvolvimento do Projeto

Durante o desenvolvimento deste projeto, diversas decisões foram tomadas para atender aos requisitos e proporcionar uma experiência eficiente e escalável. Abaixo estão algumas das decisões mais importantes:

### Aplicação Padrão do Formulário

A decisão foi tomada de aplicar o formulário com o ID = 1 como padrão na inicialização da aplicação. No entanto, foi implementada a flexibilidade de passar um ID como parâmetro, permitindo a navegação para outros formulários disponíveis na API.

Basta passar o parametro id para url, como no exemplo:

```
http://localhost:3000/?id=2
```

### Cores Dinâmicas

Para garantir uma experiência visual coesa e dinâmica, as cores dos elementos da aplicação foram deixadas como dinâmicas. Elas são obtidas dinamicamente da API, conforme o ID do formulário, permitindo uma personalização fácil e rápida.

### Único POST para Envio do Formulário

Acabei decidindo realizar um único POST no envio do formulário totalmente preenchido. Embora a possibilidade de fazer POST a cada etapa tenha sido considerada, juntamente com PUT para atualizações parciais, a opção escolhida visa reduzir o número de requisições desnecessárias (pelo menos desnecessárias no contexto do teste).

### Uso de `$emit`, `$parent`, e `$root`

Para exemplificar a comunicação entre componentes, foram utilizados os métodos `$emit`, `$parent`, e `$nuxt.$emit`.
Esses métodos foram utilizados para demonstrar formas e exemplificar a funcionalidade de executar funções entre componentes.



## Melhorias Possíveis nesse Teste

- Melhorar a forma de validações, validar também ao clicar na seta em SideNav.vue
- Considerar mais tipos de input e tambem considerar por exemplo uma pergunta podendo ser um textarea, tipo radio, tipo file para fazer uploads de arquivos

---