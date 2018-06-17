import { Component, OnInit } from '@angular/core';
import{ GalleryModel } from '../models/gallery.model';
import { GalleryService } from './gallery.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  // selector: 'app-gallery-content',
  templateUrl: './gallery-content.component.html',
  styleUrls: ['./gallery-content.component.css']
})
export class GalleryContentComponent implements OnInit {
galleryarray:GalleryModel[];
viewcount;
likecount;
searchName:string;

  constructor(private _galleryservice:GalleryService) { }

  ngOnInit() {this.galleryarray=this._galleryservice.getGallery();
  }
save(newgallery:GalleryModel)
{
  this.galleryarray.push(newgallery);
}
getcounterlike(index)
{
  this.viewcount=this._galleryservice.getcountlike(index);

}
getcounterview(index)
{
  this.likecount=this._galleryservice.getcountview(index);

}
randomgallery=[];
getrandom(){
for(let i=0;i<=this.galleryarray.length;i++)
this.randomgallery[i]=Math.round(Math.random()*this.galleryarray.length);

console.log(this.randomgallery)
}
}