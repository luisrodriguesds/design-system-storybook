import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',
  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontSize: 'small',
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$gray400',
})

export const Input = styled('input', {
  fontSize: 'small',
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$white',
  background: 'transparent',
  border: 0,
  width: '100%',
  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$gray400',
  },
})
