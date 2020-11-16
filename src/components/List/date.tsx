import * as React from 'react'
import moment from 'moment'

import { InfoText } from './styles'

export interface DateProps {
  format?: string
  content?: number
}

export default function Date({ content, format }: DateProps) {
  const DatePost = moment(content).format(format ? format : 'DD-MMM-YY')

  return <InfoText>{DatePost}</InfoText>
}
