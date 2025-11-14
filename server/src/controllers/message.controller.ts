import { Request, Response } from 'express';
import MessageService from '../services/message.service';

class MessageController {
    async sendMessage(req: Request, res: Response) {
        try {
            const { sender, content } = req.body;
            const message = await MessageService.saveMessage({ sender, content });
            res.status(201).json(message);
        } catch (error) {
            res.status(500).json({ message: 'Error sending message', error });
        }
    }

    async getMessages(req: Request, res: Response) {
        try {
            const messages = await MessageService.getMessages();
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving messages', error });
        }
    }
}

export default new MessageController();