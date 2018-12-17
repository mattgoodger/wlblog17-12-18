import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogCreatorComponent } from './blog-creator/blog-creator.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { MainRoutingModule} from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
    imports: [CommonModule, MainRoutingModule, BrowserModule, FormsModule, NgxEditorModule],
    declarations: [MainComponent, BlogListComponent, ProfileComponent,
         BlogCreatorComponent, LoginComponent, SignupComponent],
    exports: [MainComponent]
})
export class MainModule {
 }

 const appRoutes = [
    { path: './main/blog-list/blog-list', component: BlogListComponent}
  ];
