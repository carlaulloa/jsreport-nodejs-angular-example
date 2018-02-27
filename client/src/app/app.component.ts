import { Component } from '@angular/core';
import { PdfService, UtilService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private pdfService: PdfService,
    private utilService: UtilService
  ) {

  }

  clickDownload() {
    this.pdfService.getFile().subscribe((res) => {
      this.utilService.saveAsPDF(res, 'invoice');
    }, (err) => {
      console.error(err);
    });

  }
}
