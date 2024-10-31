import { SuccessResponse } from '../types/utils.type'
import { User } from '../types/user.type'

export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: string
  user: User
}>
