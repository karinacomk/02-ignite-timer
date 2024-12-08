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

      <HistoryList></HistoryList>
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

tradicional
:: Controlled = mantém a informação guardada em tempo real no estado e monitora a cada digitação.
useState() não deixar vazio
formulário simples

:: Uncontrolled
busca a info só quando precisa dela
onSubmit dentro do <form>
perde a fluidez :(, mas ganha em performance :)
formulário mais complexo, dashboard, tipo 200 inputs

# React Hook Form

https://react-hook-form.com/
trabalha com Controlled e Uncontrolled

hook = são funções que acoplam uma funcionalidade em um componente existente

método register() add input ao formulário
sintaxe um pouco complexa
register() retorna métodos para trabalharmos com input, ex: onChange, onBlur, etc

criar variável auxiliar

# Validando forms

libs:
https://github.com/jquense/yup
https://github.com/hapijs/joi
https://zod.dev/

Zod tem mais integração com TS, mas as 3 são boas
@hookform/resolvers permite integra o react-hook-form com as libs de validação

quando não tem o `export default`, importamos assim:
`import { zord } from 'zod'` OU
`import * as zord from 'zod'`

Schema é escolher um formato e validar com base neste formato.

```javascript
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})
const { register, handleSubmit, watch } = useForm({
  resolver: zodResolver(newCycleFormValidationSchema),
})
```

# TypeScript no formulário

https://github.com/colinhacks/zod
npm install react-hook-form zod @hookform/resolvers

# Resetando formulário

## FUNCIONALIDADES DA APLICAÇÃO

# Iniciando novo ciclo

aparece 2 console.log por causa do <React.StrictMode>

# Criando countdown

# O hook useEffect

hooks add comportamento a algum componente da app, sempre começa com use.

useEffect() -> side-effect -> efeito colateral -> ficar monitorando alterações em uma variável
qual função vai ser executada e quando
executa no início e toda vez que a dependência entre [] é alterada, caso contrário aí tem que colocar um if dentro do
useEffect()

se quiser que o determinado código seja executado somente na primeira renderização, basta usar o useEffect() com
array de deps vazio [], é bom quando quer fazer um chamada para uma API.

Importante: se estamos usando o useEffect() para atualizar algum estado, provavelmente, podemos estar cometendo algum
erro. Ex da lista filtrada, filteredList não precisava ser um estado, quando temos algo que depende da atualização de
estado, esse segundo muito provavelmente não precisa ser um estado e sim uma variável normal para não fazer o useEffect
ser executado 2x.

# Reduzindo countdown

# Mudando o title da página

useEffect pode ter um return

# Interromper ciclo

no setCycles() usou o princípio da imutabilidade.

# Ciclo completo

melhor assim:

O primeiro código é geralmente preferível, especialmente em React, porque usa o valor mais atualizado do estado
anterior, evitando problemas que possam surgir de renderizações assíncronas.

```javascript
setCycles((state) =>
  state.map((cycle) => {
    if (cycle.id === activeCycleId) {
      return { ...cycle, interruptedDate: new Date() }
    } else {
      return cycle
    }
  }),
)
```

do que assim:

```javascript
setCycles(
  cycles.map((cycle) => {
    if (cycle.id === activeCycleId) {
      return { ...cycle, interruptedDate: new Date() }
    } else {
      return cycle
    }
  }),
)
```

# Separando componentes

pasta components dentro de Home para os novos componentes usados em Home

# Prop Drilling no React

O Prop Drilling é um termo utilizado para quando temos muuuitas propriedades que estão se repassando em diversas camadas
da nossa árvore de componentes. Outra solução é o Context API.

## CONTEXTO NO REACT

# Entendendo contextos

o setActiveCycle() que vai alterar o estado da variável de contexto deve obrigatoriamente ficar dentro do componente
PAI, ou seja, aquele que fica em volta de <NewCycleForm> e <Countdown>, o componente <Home> no caso.
add PROVIDER por volta dos componentes que precisam ter acesso ao contexto. No value do provider envia os valores que
serão compartilhados entre todos.
o valor add no provider prevalece, ou seja, tem mais prioridade.

# Convertendo para contexto

contexto {} vazio é um problema
{} as nomeDaInterface para dar a instrução do que colocar no value do provider
Diego não gosta de enviar a função inteira setCycles para dentro do contexto por conta da tipagem dela. O ideal é criar
uma nova função que use o setCycles e assim colocar no contexto a nova função em vez do setCycles.

# Contexto no formulário

geralmente mantemos no contexto coisas que não vão mudar se trocarmos a biblioteca, no caso React. Esse ponto surgiu
a partir da dúvida se passávamos ou não 'register' via contexto. Qual a solução? Passar via props? Também não.
A melhor solução é usar o hook useFormContext(): que é usar um <FormProvider {...newCycleForm}> e passar via spread.
{...newCycleForm} repassa para o FormProvider cada elemento em forma de propriedade.
useFormContext() só funciona se tiver um <FormProvider {...newCycleForm}> em volta do componente.

# Contexto entre rotas

O contexto precisa ser desacoplado de libs externas, por ex, não usar a lib Zod de validação.

# Reset do formulário

Função que começa com o termo 'handle' são aquelas chamadas a partir de eventos como onclick().

# Listagem do histórico

# Formatação de data

## REDUCERS

# Criando reducer de ciclos

Serve para armazenar uma info e alterar no futuro. São infos mais complexas.
É como se tivesse um local fixo para todas as alterações de um estado.
usa o dispatch()

# Salvando um objeto no Reducer
