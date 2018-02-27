import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PdfService {

  constructor(private http: HttpClient) { }

  getFile() {
    return this.http.get('http://localhost:8000/reporter/invoice', { responseType: 'blob' });
  }

}
