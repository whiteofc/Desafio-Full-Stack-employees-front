import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KnowledgmentService {
  constructor(private http: HttpClient) {}

  getKnowledgments() {
    return this.http.get('http://localhost:3000/knowledgments');
  }
}
