import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GalleryContentComponent } from './gallery-content/gallery-content.component';
import { AddgalleryComponent } from './gallery-content/addgallery.component';
import { GalleryService } from './gallery-content/gallery.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { galleryFilterPipe } from './gallery-content/galleryfilter.pipe';
import { HttpClientModule }  from '@angular/common/http';

import {AuthGuard} from './auth.guard';
const approutes: Routes=[
  {path:'',component:LoginComponent },
   {path:'addgallery',component:AddgalleryComponent ,canActivate:[AuthGuard]},
   {path:'signup',component:SignupComponent },
    {path:'showgallery',component:GalleryContentComponent ,canActivate:[AuthGuard]},
    {path:'showgallery/addgallery',component:AddgalleryComponent },
    {path:'signup/login',component:LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryContentComponent,
    AddgalleryComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,galleryFilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, RouterModule.forRoot(approutes)
  ],
  providers: [GalleryService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
