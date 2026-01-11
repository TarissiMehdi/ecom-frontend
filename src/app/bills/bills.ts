import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [
    DatePipe
  ],
  templateUrl: './bills.html',
  styleUrl: './bills.css',
})
export class Bills implements OnInit{
  bills : any;
  customerId!:number;
  constructor( private http : HttpClient,private router : Router,private route:ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8085/billing-service/bills/search/byCustomerId?customerId="+this.customerId).subscribe(
      {
        next : (data )=> {this.bills=data},
        error : (err) => {console.log(err)}
      })
  }

  getBillDetails(b:   any) {
this.router.navigateByUrl("/bill-details/"+b.id);
  }

}
