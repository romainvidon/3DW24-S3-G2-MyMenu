import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecettesComponent } from './recettes/recettes.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    RecettesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
