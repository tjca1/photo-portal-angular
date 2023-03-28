import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewPhotoComponent } from './components/pages/new-photo/new-photo.component';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'about', component: AboutComponent},
 {path:'footer', component: FooterComponent},
 {path:'photos/new', component: NewPhotoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
