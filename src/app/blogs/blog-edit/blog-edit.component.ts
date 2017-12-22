import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  id: number;
  editMode = false;
  blogForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.blogService.updateBlog(this.id, this.blogForm.value);
    } else {
      this.blogService.addBlog(this.blogForm.value);
    }
    this.onCancel();
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let blogName = '';
    let blogImagePath = '';
    let blogDescription = '';


    if (this.editMode) {
      const blog = this.blogService.getBlog(this.id);
      blogName = blog.name;
      blogImagePath = blog.imagePath;
      blogDescription = blog.description;
    }

    this.blogForm = new FormGroup({
      'name': new FormControl(blogName, Validators.required),
      'imagePath': new FormControl(blogImagePath, Validators.required),
      'description': new FormControl(blogDescription, Validators.required),
    });
  }

}

