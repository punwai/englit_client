import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { AnnotationComponent } from './annotation/annotation.component';
import { BookpageComponent } from './bookpage/bookpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AnnotationComponent,
    HomepageComponent,
    BookpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent},
      { path: 'chapter/:chapterId', component: DisplayComponent },
      { path: 'book/:bookId', component: BookpageComponent },
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
