export interface User {
    id: string;
    username: string;
    password: string; // In a real application, this should be hashed
}

export interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: Date;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface MessageResponse {
    messages: Message[];
}

export interface SocketEvent {
    event: string;
    data: any;
}