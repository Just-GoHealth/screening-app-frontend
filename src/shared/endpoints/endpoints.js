export const BASE_URL = 'http://localhost:8900'

export const ENDPOINTS = {
  // Authentication
  login: '/login',
  signup: '/signup',
  verifyAccount: '/account/verification',
  forgotPassword: '/user/forget-password-token',
  resetPassword: '/user/reset-password',

  // Schools
  getSchools: '/schools',
  assignSchool: '/assign-school',
  removeSchool: '/remove-school',

  // Users
  getAllUsers: '/users',
  activateUser: '/activate-user', // append user id
  suspendUser: '/suspend-user', // append user id
}