import { Message } from '../models/message.model';
import { User } from '../models/user.model';

export class MessageService {
    async saveMessage(senderId: string, content: string): Promise<Message> {
        const message = new Message({
            sender: senderId,
            content: content,
            timestamp: new Date(),
        });
        return await message.save();
    }

    async getMessages(): Promise<Message[]> {
        return await Message.find().populate('sender', 'username').sort({ timestamp: 1 });
    }
}