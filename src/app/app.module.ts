import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { MainComponent } from './components/main/main.component';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeruComponent } from './components/peru/peru.component';
import { CountriesComponent } from './components/countries/countries.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PersonalDataComponent,
    MainComponent,
    PostComponent,
    FooterComponent,
    PeruComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
