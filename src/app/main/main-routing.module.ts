import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BlogCreatorComponent } from './blog-creator/blog-creator.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

const routes: Routes = [
    {path: 'main', component: BlogListComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'blogcreator', component: BlogCreatorComponent},
    {path: 'adminpage', component: AdminpageComponent}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class MainRoutingModule {

    routeToLogin() {
    }

}
