import { styled } from '@theme'
import NextImage, { ImageProps } from 'next/image'

const Img = (props) => <NextImage draggable={false} {...props} />

export const Image = styled(Img, {
  width: 'auto',
  height: 'auto',
  userSelect: 'none',
})

// export const Image = (props: ImageProps) => <Img draggable={false} {...props} />
