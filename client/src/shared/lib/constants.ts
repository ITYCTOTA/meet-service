export const ROUTES = {
  HOME: "/",
  MEETCHAT: "/meetchat/:chatId",
  PROFILE: "/profile/:userId",
  LOGIN: "/login",
  REGISTER: "/register",
  ERROR: "/error",
} as const

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/