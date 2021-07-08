import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LivreDetailsComponent } from './livre-details/livre-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateLivreComponent } from './create-livre/create-livre.component';
import { LivreListComponent } from './livre-list/livre-list.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateLivreComponent,
    LivreDetailsComponent,
    LivreListComponent,
    UpdateLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
