export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 6; // Minimum length for password
};

export const validateUsername = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/; // Alphanumeric and underscores, 3-30 characters
    return usernameRegex.test(username);
};

export const validateMessageContent = (content: string): boolean => {
    return content.length > 0 && content.length <= 500; // Message content must be between 1 and 500 characters
};