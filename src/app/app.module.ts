import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviedashbordComponent } from './component/moviedashbord/moviedashbord.component';
import { MovieSliderComponent } from './component/movie-slider/movie-slider.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { NavComponent } from './component/nav/nav.component';
import{HttpClientModule}from'@angular/common/http';
import { EmbedVideoComponent } from './embed-video/embed-video.component';
import { OverViewComponent } from './over-view/over-view.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviedashbordComponent,
    MovieSliderComponent,
    MovieDetailComponent,
    NavComponent,
    EmbedVideoComponent,
    OverViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
