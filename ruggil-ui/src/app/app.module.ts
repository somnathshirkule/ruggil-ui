import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';
import { NgModel } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectConfig } from '@ng-select/ng-select'; 
import { ɵs } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ChatComponent,
    VideoComponent,
    FooterComponent,
    NgModel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [NgSelectConfig, ɵs],
  bootstrap: [AppComponent]
})
export class AppModule { }
