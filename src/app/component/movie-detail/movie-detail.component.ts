import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { concatMap } from 'rxjs';
import { imovie, itailer } from 'src/app/shared/model';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
movieid!:string;
movieobject!:imovie;
movieTrailer:Array<itailer>=[]
  constructor(private _route :ActivatedRoute,
    private _movieservice :MovieService
  ) { }

  ngOnInit(): void {
    this._route.params
    .pipe(
      concatMap((myparam:Params) => {
        this.movieid=myparam['movieid']
        return this._movieservice.getsinlemovie(this.movieid)
        
      })
    )
    .subscribe(res => {
      if(this.movieid){
   this.movieobject=res
      }
    })
    this._movieservice.gettrailer(this.movieid)
    .subscribe(trailer => {
      console.log(trailer)
      this.movieTrailer=trailer
    })
  }

}
