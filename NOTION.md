https://github.com/rocketseat-education/02-ignite-timer

# Criação do projeto

npm create vite@latest
npm i
excluir arquivos desnecessários: css e importações
tirar o export default do App.tsx
colocar exportação com chave no main.tsx em vez de usar o nome:

```js
import { App } from "./App" em vez de
import App from "./App.tsx"
```

# Styled Components

css in js
css na sintaxe do js
no site do npm se tiver "TS" (declaração de tipagem) significa que a tipagem vem em um pacote separado: https://www.npmjs.com/package/styled-components
npm i styled-components
npm i @types/styled-components -D (a tipagem não precisa em prod porque em prod tudo é convertido para js, não relevância ter código TS lá dentro)
muito útil quando se usa estilização a partir de propriedades

template literals (crase):

```css
styled.button``
```

instalar extensão do styled components: vscode-styled-components
"${}" isso é interpolação, é visto como uma função js

# Configurando temas

<ThemeProvider>

# Tipagem de temas

folder @types
somente interfaces d.ts (definicao de tipos)
nao precisa decorar
agora vai autocompletar as propriedades do tema
sobrescrever tipagem de um biblioteca existente

# Estilos globais

createGlobalStyle

# Cores & fonte
