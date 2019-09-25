import { Injectable } from '@angular/core';
import { Annotation } from './annotation';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnnotationService {

  apiURL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { 

  }
  public getAnnotations(chapterid: number): Observable<Annotation[]> {
    return this.httpClient.get<Annotation[]>(`${this.apiURL}/annotateA/${chapterid}`);
  }

  public getSentenceAnnotations(chapterid: number, sentenceid: number): Observable<Annotation[]> {
    return this.httpClient.get<Annotation[]>(`${this.apiURL}/annotateA/${chapterid}/sentence/${sentenceid}`);
  }

  public postAnnotations(anno: Annotation, chapterid: number): Observable<Annotation> {
    return this.httpClient.put<Annotation>(`${this.apiURL}/chapterA/${chapterid}`, anno);
  }
}
  