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

Fonte Roboto 400 regular e bold 700 e mono (pra não modificar o container quando a fonte é monoespaçada, ou seja, mesma largura)

preconnect vir antes é melhor no index.html

# Configurando ESLint

ecma script lint => validar se segue padrões
npm i eslint -D
npm i @rocketseat/eslint-config -D (traz padroes de escrita de código)
npx eslint --init (para criar a propria config)
criar arquivo .eslintrc.json
executa no terminal: npx eslint src --ext .ts,.tsx 
se adicionar --fix corrige de tudo de uma só vez

## Páginas e rotas
# React Router DOM
npm i react-router-dom
<BrowserRouter />

# Layout de rotas
"O" logo
criar algo que pode ser reaproveitado: usamos o outlet (espaço pra ser inserido um conteúdo)
adiciona o <Route> pegando as outras rotas
dá pra aplicar vários layouts, por ex, pra parte de admin se o layout precisa ser diferente
os paths serão somados
1# Header & Layout
diretório header, arquivo index com arquivo styles
alt= "Logo do Ignite" não explica nada.
padrão do flex é row, um do lado do outro
gap dá um espaço, melhor que margin-left/right
<NavLink> em vez do <a href>
<NavLink> dá pra colocar o title q é bom pra acessibilidade e tem a propriedade active do link

# Página Home
flex-wrap: wrap => é para quebrar a linha quando diminuir a tela.

# Finalização de Home
cascata de css é bom evitar cascatear muito
BaseInput estilo base pra customizar
input não herda tamanho da fonte do container, pode usar inherit pra herdar
flex = 1 é tipo um atalho e outras 3 propriedades css (o input vai caber no espaço que tiver, pode aumentar, pode diminuir, pode se ajustar)

# Aprimorando os inputs
step, min, max
datalist

# Página: History
pasta History com:

- arquivo index.tsx:
```javascript
import { HistoryContainer } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
      </HistoryList>
    </HistoryContainer>
  )
}
```
- arquivo styles.ts
```css
import styled from 'styled-components'

export const HistoryContainer = styled.main``
```

Faz um mock
Estilização

# Componente: Status

## Formulários

# Controlled vs Uncontrolled