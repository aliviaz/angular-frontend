import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  id: number;


  constructor(private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.blog = this.blogService.getBlog(this.id);
      }
    );
  }
  
    onEditBlog() {
      this.router.navigate(['edit'], {relativeTo: this.route});
     
    }
  
    onDeleteBlog() {
      this.blogService.deleteBlog(this.id);
      this.router.navigate(['/blogs']);
    }
  
  }
