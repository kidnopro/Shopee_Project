export const saveAccesTokenToLs = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
export const clearAccesTokenFromLs = () => {
  localStorage.removeItem('access_token')
}
export const getAccesTokenFromLs = () => localStorage.getItem
('access_token') || ''
