import { Injectable } from '@angular/core';
import * as FileSaver from "file-saver";

@Injectable()
export class UtilService {

  constructor() { }

  saveAsPDF(blob: Blob, fileName: string) {
    let file = new Blob([blob], { type: 'application/pdf' });
    FileSaver.saveAs(file, `${fileName}.pdf`);
  }

}
