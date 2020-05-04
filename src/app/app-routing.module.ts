import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { JoinusComponent } from './joinus/joinus.component';
import { TrustmemberComponent } from './trustmember/trustmember.component';




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Contact', component: ContactusComponent},
  {path: 'news', component: NewsComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'About', component: AboutComponent},
  {path: 'JoinUs', component: JoinusComponent},
  {path: 'TrustMember', component: TrustmemberComponent},
  {path: '', redirectTo: '/Contactus', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    HomeComponent,
    ContactusComponent,
    NewsComponent,
    GalleryComponent,
    AboutComponent,
    JoinusComponent,
    TrustmemberComponent
],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
