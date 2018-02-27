import { Request, Response } from 'express';
import { PDFService } from '../services';

export class ReportController {
  private pdfService: PDFService;

  constructor(opts) {
    this.pdfService = opts.PDFService;
  }

  getInvoicePDF(req: Request, res: Response, next: any) {
    let data = {
      "number": "123",
      "seller": {
        "name": "Next Step Webs, Inc.",
        "road": "12345 Sunny Road",
        "country": "Sunnyville, TX 12345"
      },
      "buyer": {
        "name": "Acme Corp.",
        "road": "16 Johnson Road",
        "country": "Paris, France 8060"
      },
      "items": [{
        "name": "Website design",
        "price": 300
      }]
    }
    this.pdfService.generate(data, './templates/invoice.hbs', 'portrait')
      .then((resp: any) => {
        res.contentType('application/pdf');
        res.send(resp.content);
      })
      .catch(err => {
        console.log('ERROR', err);
        next(err);
      });
  }

}