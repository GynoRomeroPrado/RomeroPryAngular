import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { PeruComponent } from './components/peru/peru.component';


const routes: Routes = [
  {
    path:'',
    // component: AppComponent,
    children:[
      {
        path:'',
        redirectTo:'peru',
        pathMatch: 'full'
      },
      {
        path:'peru',
        component: PeruComponent
      },
      {
        path:'countries',
        component: CountriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
