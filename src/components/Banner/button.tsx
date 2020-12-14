import * as React from 'react'
import { BannerButton, Route } from './styles'

interface ButtonProps {
  route?: string
}

export const Button: React.FC<ButtonProps> = ({ route }: ButtonProps) => {
  return (
    <Route href={route}>
      <BannerButton>Read More</BannerButton>
    </Route>
  )
}
