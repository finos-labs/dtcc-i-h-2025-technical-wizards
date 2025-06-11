import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://ec2-18-237-88-132.us-west-2.compute.amazonaws.com:8000/api/ask';

  constructor(private http: HttpClient) {}

  askQuestion(prompt: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { prompt };

    // ✅ Log the body being sent to the API
    console.log('Sending to API:', body);

    return this.http.post(this.apiUrl, body, { headers });
  }
}
