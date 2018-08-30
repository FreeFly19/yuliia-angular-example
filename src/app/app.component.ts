import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phrases: PhraseDto[] = [];

  constructor(private http: HttpClient) {
    http.get<PhraseDto[]>('/api/phrases')
      .subscribe(res => this.phrases = res);
  }
}

interface PhraseDto {
  id: number;
  text: string;
  translations: any[];
}
