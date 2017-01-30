import numeral from 'numeral'
import 'numeral/locales/pt-br'

numeral.locale('pt-br')

export const currency = number =>
  numeral(number).format('$0,0.00').replace('$', '$ ')

export const percentage = number =>
  `${numeral(number).format('0[.]0[0]')}%`
