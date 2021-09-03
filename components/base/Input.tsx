import { styled } from 'theme'

export const Input = styled('input', {
  fontSize: '$md',
  backgroundColor: '$lowContrast',
  fontWeight: '$bold',
  padding: '5px',
  borderRadius: '20px',
  color: '$highContrast',
  width: '100%',
  '::placeholder': {
    color: '$mediumContrast',
  },
})
