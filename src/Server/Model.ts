import { IncomingMessage, ServerResponse } from "http";

export interface Account {
    username: string
    password: string,
}

export interface Handler {
    handleRequest(): void
    // handleRequest(req: IncomingMessage, res: ServerResponse, tokenGenerator: TokenGenerator): Promise<void>
}

export interface SessionToken {
    tokenId: string
}

export interface TokenGenerator {
    generateToken(account: Account): Promise<SessionToken | undefined>
}