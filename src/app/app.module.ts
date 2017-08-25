import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructorComponent,
    HeaderComponent,
    SidenavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
