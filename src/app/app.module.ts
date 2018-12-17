import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule} from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MainRoutingModule } from './main/main-routing.module';
import { HttpModule } from '@angular/http';
import { NgxEditorModule } from 'ngx-editor';
import { AdminpageComponent } from './main/adminpage/adminpage.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    NavigationModule,
    AppRoutingModule,
    CoreModule,
    MainRoutingModule,
    HttpModule,
    AppRoutingModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

