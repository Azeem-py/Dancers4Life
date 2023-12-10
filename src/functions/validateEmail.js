export const validateEmail = (email) => {
  // Simple email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}
