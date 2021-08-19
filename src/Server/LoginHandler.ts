import { ServerResponse, IncomingMessage } from 'http'
import { Account, Handler, TokenGenerator } from './Model'

export class LoginHandler implements Handler {
    private req: IncomingMessage
    private res: ServerResponse
    private tokenGenerator: TokenGenerator

    public constructor(req: IncomingMessage, res: ServerResponse, tokenGenerator: TokenGenerator) {
        this.req = req
        this.res = res
        this.tokenGenerator = tokenGenerator
    }

    public async handleRequest(): Promise<void> {
        console.log('before gRB')
        const body = await this.getRequestBody()
        const sessionToken = await this.tokenGenerator.generateToken(body)
        if(sessionToken) {
            this.res.write('valid credentials') 
        } else {
            this.res.write('wrong credentials')
        }
    }
/* getBodyRequest is an async, returns a promise, expected data type too.
    initials a body variable.
    On the request object if it's ??? called data then add data
 */
    private async getRequestBody(): Promise<Account> {
        return new Promise((resolve, reject) => {
            let body = ''
            this.req.on('data', (data: string) => {
                body+=data
            })
            this.req.on('end', () => {
                try {
                resolve(JSON.parse(body))}
                catch(error) {
                    reject(error)
                }
            })  
            this.req.on('error', (error: Error) => {
                  reject(error)  
            })
        }
            
    )}

}