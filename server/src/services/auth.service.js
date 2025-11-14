const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const authService = {
    register: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },

    login: async (email, password) => {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { user, token };
    },

    validateToken: (token) => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
};

module.exports = authService;