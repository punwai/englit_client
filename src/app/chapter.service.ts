import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chapter } from './chapter'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  apiURL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { 

  }
  public getChapter(id: number): Observable<Chapter> {
    return this.httpClient.get<Chapter>(`${this.apiURL}/chapterA/${id}`);
  }
  
}
