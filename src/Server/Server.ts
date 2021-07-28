import { createServer, IncomingMessage } from 'http'
import { LoginHandler } from './LoginHandler'
import { Utils } from './Utils'

export class Server {
    public createServer() {
        createServer((req: IncomingMessage, res) => {
            // console.log('got response from: ', req.method)
            const baseURL = 'http://' + req.headers.host + '/'
            const basePath = Utils.getUrlBasePath(req.url, baseURL)
         
         switch(basePath) {
             case 'login':
                 new LoginHandler(req, res)
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