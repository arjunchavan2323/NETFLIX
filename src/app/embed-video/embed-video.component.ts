import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.scss']
})
export class EmbedVideoComponent implements OnInit {
@Input ()key!:string;
trailerurl!:SafeResourceUrl
  constructor(private _santitizer :DomSanitizer) { }

  ngOnInit(): void {
    if(this.key){
      const url=`https://www.youtube.com/embed/${this.key}`
      this.trailerurl=this._santitizer.bypassSecurityTrustResourceUrl(url)
    }
  }

}
