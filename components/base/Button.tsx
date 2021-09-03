import { styled } from '@theme'

export const Button = styled('button', {
  color: '$highContrast',
  background: 'transparent',
  fontWeight: '$regular',
  width: 'fit-content',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
})
