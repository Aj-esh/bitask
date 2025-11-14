import Message from '../models/message.model.js';

export const createMessage = async (messageData) => {
    const message = new Message(messageData);
    return await message.save();
};

export const getMessages = async () => {
    return await Message.find();
};

export const getMessageById = async (id) => {
    return await Message.findById(id);
};

export const updateMessage = async (id, messageData) => {
    return await Message.findByIdAndUpdate(id, messageData, { new: true });
};

export const deleteMessage = async (id) => {
    return await Message.findByIdAndDelete(id);
};