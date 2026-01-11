import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit{
  customers : any;
  constructor( private http : HttpClient,private router : Router) {
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8085/customer-service/customers").subscribe(
      {
        next : (data )=> {this.customers=data},
        error : (err) => {console.log(err)}
      })
  }

  getBills(c: any) {
this.router.navigateByUrl("/bills/"+c.id);
  }
}
