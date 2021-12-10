import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScorelistComponent } from './scorelist/scorelist.component';
import { GameRoundListComponent } from './game-round-list/game-round-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorelistComponent,
    GameRoundListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
