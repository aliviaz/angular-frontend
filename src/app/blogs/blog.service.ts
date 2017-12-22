import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Blog } from './blog.model';
@Injectable()
export class BlogService {
  blogsChanged = new Subject<Blog[]>();

  private blogs: Blog[] = [
    new Blog(
      'Cricket',
      'Cricket is a bat-and-ball game played between two teams of eleven players each on a cricket field, at the centre of which is a rectangular 22-yard-long pitch with a target called the wicket (a set of three wooden stumps topped by two bails) at each end. Each phase of play is called an innings during which one team bats, attempting to score as many runs as possible, whilst their opponents field. Depending on the type of match, the teams have one or two innings apiece and, when the first innings ends, the teams swap roles for the next innings. Except in matches which result in a draw, the winning team is the one that scores the most runs, including any extras gained.',
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/The_England_Cricket_Team_Ashes_2015.jpg',//image of cricket
    ),
    new Blog('fashion',
      'What else you need to say?',
      'https://static.pexels.com/photos/285171/pexels-photo-285171.jpeg',
     )
  ];

  constructor() {}

  setBlogs(blogs: Blog[]){
    this.blogs = blogs;
    this.blogsChanged.next(this.blogs.slice());
  }
  

  getBlogs() {
    return this.blogs.slice();
  }

  getBlog(index: number) {
    return this.blogs[index];
  }


  addBlog(blog: Blog) {
    this.blogs.push(blog);
    this.blogsChanged.next(this.blogs.slice());
  }

  updateBlog(index: number, newBlog: Blog) {
    this.blogs[index] = newBlog;
    this.blogsChanged.next(this.blogs.slice());
  }

  deleteBlog(index: number) {
    this.blogs.splice(index, 1);
    this.blogsChanged.next(this.blogs.slice());
  }
}
