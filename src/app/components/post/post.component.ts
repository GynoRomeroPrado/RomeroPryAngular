import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  dataPost :any[];

  constructor(private apiRestService:ApiRestService) { }

  ngOnInit(): void {
    this.apiRestService.getPost().subscribe(res=>{
      this.dataPost=res;
    })
  }
  

}
