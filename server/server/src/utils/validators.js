export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 6; // Minimum length of 6 characters
};

export const validateMessageContent = (content) => {
    return content && content.trim().length > 0; // Content should not be empty
};

export const validateUserRegistration = (userData) => {
    const { email, password } = userData;
    return validateEmail(email) && validatePassword(password);
};