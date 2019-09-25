import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { AnnotationService } from '../annotation.service';
import { Chapter, Paragraph } from '../chapter';
import { Annotation } from '../annotation';
import {ActivatedRoute} from "@angular/router";

var colors = ["#def440", '#3ef453', "#f43edf", "#3edff4", "#f4813e"]
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  text: Paragraph[];
  id: number;
  annotations: Annotation[];
  constructor(private annotationService: AnnotationService, private chapterService: ChapterService, private route: ActivatedRoute) {

    this.route.params.subscribe( params => this.id = params.chapterId);
  }
  ngOnInit() {
    this.chapterService.getChapter(this.id).subscribe((res)=>{
      this.text = res.text;
      console.log(res);
      this.annotationService.getAnnotations(this.id).subscribe((annores)=>{
        for(var i = 0; i < annores.length; i++){
          document.getElementById("text"+annores[i].SentenceStart).style.cssText = "background: " + colors[i%colors.length];
        }
      });
    });
  }
  
  sentenceClick(sid: number){
    this.annotationService.getSentenceAnnotations(this.id, sid).subscribe((res) => {
      this.annotations = res;
    });
  }
}
