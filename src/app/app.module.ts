import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaintsComponent } from './components/paints/paints.component';
import { PaintComponent } from './components/paint/paint.component';

@NgModule({
  declarations: [
    AppComponent,
    PaintsComponent,
    PaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
