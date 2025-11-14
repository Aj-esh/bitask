import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { username, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const register = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, { username, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}/messages`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};