import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class ProvideDataService {
  
  public information = [];
  public OriginalData;

  private _url = "/assets/fakedata/dummyData.json";
  constructor(private http:HttpClient,private router: Router) {
    this.getData();
   }

  getData(){
     this.http.get(this._url).subscribe(result => {
      this.information = result["data"];
      this.OriginalData = this.information;
  },  
  error=>{
    console.log("Error",error)
  });
  }

  addData(data){
    if (confirm('Are you sure you want to save this thing into the database?')) {
      this.information.push(data);
      this.router.navigate(['/'])
    } else {
      this.router.navigate(['/'])
    }
  }
  
}
