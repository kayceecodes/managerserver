import { Account, SessionToken, TokenGenerator } from "../Server/Model";

export class Authorize implements TokenGenerator {

    async generateToken(account: Account): Promise<SessionToken | undefined> {
        if(account.username === 'abcd' && account.password === '1234') {
            return {
                tokenId: 'someTokenId'
            }
        } else {
            return undefined
        }
    }
}

/**
 * authorize shares same properties as TokenGenerator(it has generate token)    
 * (classes can implement interfaces)
 * generate takes account information through varialbe account. It has username & password
 *  - if username is === 'abcd' and password === '1234' return tokenId else return undefined
 */