export const validateState = ({ userName, email, phoneNumber }) => {
  const errors = {}

  // Check if any field is empty
  if (!userName) {
    errors.userName = "Name is required."
  }

  if (!email) {
    errors.email = "Email is required."
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address."
    }
  }

  if (!phoneNumber) {
    errors.phoneNumber = "Phone number is required."
  } else {
    const phoneNumberRegex = /^\d{10}$/
    if (!phoneNumberRegex.test(phoneNumber)) {
      errors.phoneNumber = "Please enter a valid 10-digit phone number."
    }
  }

  if (errors.userName || errors.email || errors.phoneNumber) {
    return errors
  }

  return null
}
