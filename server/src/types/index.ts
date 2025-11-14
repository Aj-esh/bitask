export interface User {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
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

export interface MessagePayload {
    sender: string;
    content: string;
}

export interface SocketEvent {
    event: string;
    data: any;
}