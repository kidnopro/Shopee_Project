import { User } from '../types/user.type'

export const localStorageEventTarget = new EventTarget()

export const setAccessTokenToLs = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
export const clearLs = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
  const clearLSEvent = new Event('clearLs')
  localStorageEventTarget.dispatchEvent(clearLSEvent)
}
export const getAccesTokenFromLs = () => localStorage.getItem('access_token') || ''

export const getProfileFromLs = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfileToLs = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
