import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  empcode=""
  searchdata:any=[]

  constructor(private api:ApiService){}

  read=()=>{
    let data={"empcode": this.empcode}
    console.log(data)
    this.api.searchemp(data).subscribe(
      (response:any)=>{
        console.log(response)

        if(response.length==0){
          alert("Invalid Employee Code")
        }
        else{
          this.searchdata=response
        }

      }
    )
  }


}
