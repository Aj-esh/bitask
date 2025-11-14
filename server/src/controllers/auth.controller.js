const User = require('../models/user.model');
const AuthService = require('../services/auth.service');

exports.register = async (req, res) => {
    try {
        const user = await AuthService.registerUser(req.body);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { token, user } = await AuthService.loginUser(req.body);
        res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};