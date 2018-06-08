import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ GalleryModel } from '../models/gallery.model'
import { GalleryService } from './gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addgallery',
  templateUrl: './addgallery.component.html',
  styleUrls: ['./addgallery.component.css']
})
export class AddgalleryComponent implements OnInit {
  fullurl;
  Name;
  personimage;
  Status;
  View;
  Like;

  constructor(private _addgallery:GalleryService,private _router:Router) { }

  ngOnInit() {
  }
  
  savegallery()
  {
   let newgallery:GalleryModel={
      natureImagePath:this.fullurl,
    personImagePath:this.personimage,
    Name:this.Name,
    status:this.Status,
    view:0,
    like:0,
    };
this._addgallery.save(newgallery);
this._router.navigate(['showgallery']);

}
}