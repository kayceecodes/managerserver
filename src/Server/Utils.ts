import { URL } from 'url'

export class Utils {
    public static getUrlBasePath(url: string | undefined, baseUrl: string): string {
       if(url) {
           const basePathURL = new URL(url, baseUrl)

           return basePathURL.pathname.split('/')[1]
       }
        else {
            return '';
        }
    }
}