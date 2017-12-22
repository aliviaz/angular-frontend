import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { BlogService } from '../blogs/blog.service';
import { Blog } from '../blogs/blog.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
    constructor(private http: Http, private blogService: BlogService, private authService: AuthService) {}
    
      storeBlogs() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-final-app.firebaseio.com/blogs.json?auth=' + token, this.blogService.getBlogs());
      }

      getBlogs(){
          const token = this.authService.getToken();

          this.http.get('https://ng-final-app.firebaseio.com/blogs.json?auth=' + token)
          .subscribe(
              (response: Response) =>{
                  const blogs: Blog[] = response.json();
                  this.blogService.setBlogs(blogs);
              }
           ) ;
          
    }
}