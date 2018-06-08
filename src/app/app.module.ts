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


const approutes: Routes=[
  {path:'',component:LoginComponent },
   {path:'addgallery',component:AddgalleryComponent },
   {path:'signup',component:SignupComponent },
    {path:'showgallery',component:GalleryContentComponent },
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
    FooterComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(approutes)
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
