import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BlogEditComponent } from './blogs/blog-edit/blog-edit.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogItemComponent } from './blogs/blog-list/blog-item/blog-item.component';
import { BlogStartComponent } from './blogs/blog-start/blog-start.component';
import { AppRoutingModule } from './app-routing.module';
import {BlogService} from './blogs/blog.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    BlogDetailComponent,
    BlogEditComponent,
    BlogListComponent,
    BlogItemComponent,
    BlogStartComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent,

 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BlogService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
