import { createServer, IncomingMessage } from 'http'
import { Authorize } from '../Auth/Authorize'
import { LoginHandler } from './LoginHandler'
import { Utils } from './Utils'

export class Server {

    private authorize: Authorize = new Authorize()

    public createServer() {
        createServer(
            async (req: IncomingMessage, res) => {
            // console.log('got response from: ', req.method)
            const baseURL = 'http://' + req.headers.host + '/'
            const basePath = Utils.getUrlBasePath(req.url, baseURL)
         
         switch(basePath) {
             case 'login':
                 await new LoginHandler(req, res, this.authorize)
                 break;
            default: 
                break;
         }
         
            console.log('basePath: ', basePath)
            res.end()
        }).listen(8080)
        console.log('server started')

        }
}


/**
 * private authorize object of Type Authorize(clases can be used to create type annotation)
 *  - assign new Authorize() to private authorize object
 * public createServer
 */