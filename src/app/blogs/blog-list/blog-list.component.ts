import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {
  blogs: Blog[];
  subscription: Subscription;

  constructor(private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute) {

     }

  ngOnInit() {
    this.subscription = this.blogService.blogsChanged
    .subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
      }
    );
  this.blogs = this.blogService.getBlogs();
  }
  onNewBlog() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
