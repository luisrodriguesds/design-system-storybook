import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  background: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid gray900',
  '&:focus': {
    border: '2px solid $ignite300',
  },
  '&[data-state="checked"]': {
    background: '$ignite300',
  },
})

const sideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const sideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: 'White',
  width: '$4',
  height: '$4',
  '&[data-state="checked"]': {
    animation: `${sideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${sideOut} 200ms ease-out`,
  },
})
