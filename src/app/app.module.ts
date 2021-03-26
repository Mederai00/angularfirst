import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandeCreateComponent } from './commande/commande-create/commande-create.component';
import { CommandeListComponent } from './commande/commande-list/commande-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    CommandeCreateComponent,
    CommandeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CommandeComponent]
})
export class AppModule { }
