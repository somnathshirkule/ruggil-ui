import { VideoComponent } from './video/video.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "home", 
    component: HomeComponent
  },
  {
    path : "chat", 
    component: ChatComponent
  },
  {
    path : "videoConferncing", 
    component: VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
