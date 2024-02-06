import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1%; // faz ocupar o máximo de largura possível
  overflow: auto; // se a tabela for maior que o container vai gerar barra de rolage
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse; // borda no td de 1px somente entre os tds
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem; // 14px
      line-height: 1.6; // 160%

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%; // para a coluna Tarefa ocupar a maioria do espaço
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

// mapear para em vez do hexadecimal usar cor do tema
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const // pra dizer que não pode mudar, só pode essas 3 strings

interface StatusProps {
  statuscolor: keyof typeof STATUS_COLORS // são as keys do tipo STATUS_COLORS
  // statusColor: 'yellow' | 'red' | 'green'
}

// export const Status = styled.span<StatusProps>`
export const Status = styled.span.withConfig({
  shouldForwardProp: (prop) => prop === 'statuscolor',
})<StatusProps>`
  // para receber uma propriedade usa generics do typescript
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    // before é a bolinha
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statuscolor]]};
  }
`
