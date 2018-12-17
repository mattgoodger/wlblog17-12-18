import { Component, OnInit } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor';
import { Blogs} from '../../models/blogs';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-blog-creator',
  templateUrl: './blog-creator.component.html',
  styleUrls: ['./blog-creator.component.css']
})
export class BlogCreatorComponent implements OnInit {
  
  blog = new Blogs();
  
  constructor(private dataservice: DataService) { }

  submitBlog(){
      this.blog.idUser = "user1";
      this.blog.state = "DRAFT";
      for(let data in this.blog){
        console.log(data);
      }
      var result = this.dataservice.addBlog(this.blog);

  }

  resetBlog(){

  }

  ngOnInit() {
  }

}
