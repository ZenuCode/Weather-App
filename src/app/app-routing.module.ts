import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { DetailsComponent } from './shared/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-home-page', pathMatch: 'full' },
  { path: 'app-home-page', component: HomePageComponent },
  { path: 'app-details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
