import { NonUndefined } from 'react-hook-form'

export interface SuccessResponse<Data> {
  message: string
  data: Data
}

export interface ErrorResponse<Data> {
  message: string
  data?: Data
}

export type NoUnderfinedField<T> = {
  [P in keyof T]-?: NoUnderfinedField<NonUndefined<T[P]>>
}

