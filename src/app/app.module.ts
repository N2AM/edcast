import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './marginals/header/header.component';
import {InstructorsModule} from "./instructors/instructors.module";
import { NavBarComponent } from './marginals/nav-bar/nav-bar.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsEmitPluginModule} from "@ngxs-labs/emitter";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InstructorsModule,
    NgxsModule.forRoot([], {
      developmentMode: false,
      compatibility: {
        strictContentSecurityPolicy: true,
      },
    }),
    NgxsEmitPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
