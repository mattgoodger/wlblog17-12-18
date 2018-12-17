import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/data.service';
import { IBlog } from 'src/app/interfaces';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  listOfBlogs: any[] = [];
  rows: number;
  row: any[];

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getBlogs('any').subscribe((blogs: IBlog[]) => this.listOfBlogs = blogs);
   /* this.listOfBlogs = [
             {id: 1, title: 'blog 1', content: 'yuh yuh good blog bro'},
            {id: 2, titsle: 'blog 2', content: 'yuh yuh good blog man'},
            {id: 3, title: 'blog 3', content: 'yuh yuh good blog dude'},
            {id: 4, title: 'blog 4', content: 'yuh yuh good blog fam'}
    ]; */
    // this.rows = (this.listOfBlogs.length / 4) + 1;
  }

}
