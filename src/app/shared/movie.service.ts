import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { imovie, imovieresponse, itailer, itailerresponse } from './model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
baseurl:string=environment.baseurl;
apikey:string=environment.apikey
  constructor(private _http :HttpClient) { }


  getAlltreadingmovie():Observable<imovie[]>{
    let trendingurl=`${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    return this._http.get<imovieresponse>(trendingurl)
    .pipe(
      map(res => (res.results))
    )
  }

  getsinlemovie(id:string):Observable<imovie>{
   let singleurl=`${this.baseurl}/movie/${id}?api_key=${this.apikey}`
   return this._http.get<imovie>(singleurl)
  }

  gettrailer(id:string):Observable<itailer[]>{
    let trailer=`${this.baseurl}/movie/${id}/videos?api_key=${this.apikey}`
    return this._http.get<itailerresponse>(trailer)
    .pipe(
      map(res => (res.results))
    )
  }
}
