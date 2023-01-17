import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  fontFamily: '$default',
  fontSize: 'small',
  color: '$white',
  resize: 'vertical',
  minHeight: 80,
  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$gray400',
  },
})
export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}

TextArea.displayName = 'TextArea'
