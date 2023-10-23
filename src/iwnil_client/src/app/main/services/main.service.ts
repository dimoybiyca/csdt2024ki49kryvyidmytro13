import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SendMessageResponseInterface } from 'src/app/main/types/send-message-response.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<SendMessageResponseInterface> {
    const url = environment.serverUrl + 'message';

    return this.http.post<SendMessageResponseInterface>(url, message);
  }
}
