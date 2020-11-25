import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.scss']
})
export class PeruComponent implements OnInit {
  dataPeru :any[];
  constructor(private apiRestService:ApiRestService) { }

  ngOnInit(): void {
    this.apiRestService.getPeru().subscribe(res=>{
      this.dataPeru=res;
    })
  }

}
