import { jsreport } from '../app';
import * as path from 'path';
import * as fs from 'fs';

export class PDFService {

  constructor(){
    
  }

  generate(data: any, filePath: string, orientation: string) {
    return jsreport.render({
      template: {
        content: fs.readFileSync(path.join(__dirname, '..', '..', filePath)).toString(),
        engine: 'handlebars',
        recipe: 'phantom-pdf',
        phantom: {
          orientation: orientation
        },
        helpers: {
          now: function now() {
            return new Date().toLocaleDateString()
          },
          nowPlus20Days: function nowPlus20Days() {
            var date = new Date()
            date.setDate(date.getDate() + 20);
            return date.toLocaleDateString();
          },
          total: function total(items) {
            var sum = 0
            items.forEach(function (i) {
              sum += i.price
            })
            return sum
          }
        }
      },
      data: data
    });
  }
}