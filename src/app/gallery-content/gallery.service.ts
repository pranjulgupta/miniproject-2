import { Injectable } from '@angular/core';
import{ GalleryModel } from '../models/gallery.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GalleryService
{constructor( private _http:HttpClient){}
    private  galleryList:GalleryModel[]=[{
        natureImagePath:'assets/demo/photos/grant-ritchie-338179-500.jpg',
      personImagePath:'assets/demo/faces/male/41.jpg',
      Name:'Nathan Guerrero',
      status:'12 days ago',
      view:0,
      like:0
      },
      { natureImagePath:'assets/demo/photos/ilnur-kalimullin-218996-500.jpg',
      personImagePath:'assets/demo/faces/female/1.jpg',
      Name:'Alice Mason',
      status:'12 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/jakob-owens-224352-500.jpg',
      personImagePath:'assets/demo/faces/female/18.jpg',
      Name:'Rose Bradley',
      status:'4 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/jeremy-bishop-330225-500.jpg',
      personImagePath:'assets/demo/faces/male/16.jpg',
      Name:'Peter Richards',
      status:'18 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/jonatan-pie-226191-500.jpg',
      personImagePath:'assets/demo/faces/male/26.jpg',
      Name:'Wayne Holland',
      status:'16 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/josh-calabrese-66153-500.jpg',
      personImagePath:'assets/demo/faces/female/7.jpg',
      Name:'Michelle Ross',
      status:'4 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/joshua-earle-157231-500.jpg',
      personImagePath:'assets/demo/faces/female/17.jpg',
      Name:'Debra Beck',
      status:'6 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/mahkeo-222765-500.jpg',
      personImagePath:'assets/demo/faces/male/30.jpg',
      Name:'Phillip Peters',
      status:'17 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/matt-barrett-339981-500.jpg',
      personImagePath:'assets/demo/faces/male/32.jpg',
      Name:'Jack Ruiz',
      status:'15 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/nathan-anderson-297460-500.jpg',
      personImagePath:'assets/demo/faces/male/9.jpg',
      Name:'Ronald Bradley',
      status:'11 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/nathan-anderson-316188-500.jpg',
      personImagePath:'assets/demo/faces/female/8.jpg',
      Name:'Kathleen Harper',
      status:'16 days ago',
      view:0,
      like:0
      },
      {
        natureImagePath:'assets/demo/photos/nathan-dumlao-287713-500.jpg',
      personImagePath:'assets/demo/faces/male/4.jpg',
      Name:'Bobby Knight',
      status:'6 days ago',
      view:0,
      like:0
      }
      ];
      getGallery()
      {
       return this.galleryList;   
      }
    save(newgallery:GalleryModel)
  {
    this.galleryList.push(newgallery);
  }
getcountlike(index)
{
  this.galleryList[index].like+=1;
}
getcountview(index)
{
 //this.galleryList[index].view+=1;
}
}
