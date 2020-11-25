import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  dataCountries :any[];
  constructor(private apiRestService:ApiRestService) { }

  ngOnInit(): void {
    this.apiRestService.getCountry().subscribe(res=>{
      this.dataCountries=res;
    })
  }

}
