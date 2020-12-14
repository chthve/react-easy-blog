import * as React from 'react'
import moment from 'moment'

import { InfoText } from './styles'

export interface DateProps {
  format?: string
  content?: number
}

export const Date: React.FC<DateProps> = ({ content, format }: DateProps) => {
  format = format || 'DD-MMM-YY'
  const DatePost = moment(content).format(format)

  return <InfoText>{DatePost}</InfoText>
}
