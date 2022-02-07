import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {ProvideDataService} from '../provide-data.service';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FilterDataPipe} from '../filter-data.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private dataProvider:ProvideDataService, private filterData:FilterDataPipe,private router: Router) { }
  public ascNumberSort:boolean = true;
  public spinner:boolean = false;
  @ViewChild("myInput") myInput:ElementRef

  ngOnInit() {
  }

  ngAfterViewInit(){
     const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
       map(event => event.target.value),
       debounceTime(500),
       distinctUntilChanged()
     )

     searchTerm.subscribe(res=>{
      this.spinner = true;
      this.dataProvider.information = this.dataProvider.OriginalData;
      setTimeout(()=>{
        this.spinner = false;
        this.dataProvider.information = this.filterData.transform(this.dataProvider.information,res)
      },1000)
     })
  }
  
  onSortClick(type,colName) {
    this.ascNumberSort = !this.ascNumberSort;
    if(type == "stringType"){

      if(this.ascNumberSort) {
        this.dataProvider.information = this.dataProvider.information.sort(function(a, b){
          if(a[colName].toUpperCase() < b[colName].toUpperCase()) 
          {return -1}
        });
        } else {
          this.dataProvider.information =this.dataProvider.information.sort(function(a, b){
          if(b[colName].toUpperCase() < a[colName].toUpperCase()) 
          {return -1}
        });
      }

    }else{

      if(this.ascNumberSort) {
        this.dataProvider.information = this.dataProvider.information.sort((a, b) => a[colName] - b[colName]); // For ascending sort
        } else {
          this.dataProvider.information = this.dataProvider.information.sort((a, b) => b[colName] - a[colName]); // For descending sort
      }
    }
    
  }

  gotoEmployee(){
   this.router.navigate(['/addEmployee'])
  }

}
