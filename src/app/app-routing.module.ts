import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogStartComponent } from './blogs/blog-start/blog-start.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BlogEditComponent } from './blogs/blog-edit/blog-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';




const appRoutes: Routes = [
    { path: '', redirectTo: '/blogs', pathMatch: 'full' },
    { path: 'blogs', component: BlogsComponent, children: [
      { path: '', component: BlogStartComponent },
      { path: 'new', component: BlogEditComponent, canActivate: [AuthGuard]},
      { path: ':id', component: BlogDetailComponent },
      { path: ':id/edit', component: BlogEditComponent, canActivate: [AuthGuard]},
    ] },
    {path: 'signup', component: SignupComponent}
    {path: 'signin', component: SigninComponent}

   
  ];
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
  