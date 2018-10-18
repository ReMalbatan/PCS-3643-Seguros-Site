import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    OrcamentoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
