import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { imovie } from 'src/app/shared/model';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss']
})
export class MovieSliderComponent implements OnInit {
movieArray:Array<imovie>=[]
  constructor(private _movieservice :MovieService) { }

  ngOnInit(): void {
    this._movieservice.getAlltreadingmovie()
    .subscribe(res => {
      console.log(res)
      this.movieArray=res
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<<', '>>'],
    autoplay:true,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
