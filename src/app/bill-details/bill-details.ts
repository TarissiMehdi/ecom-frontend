import {Component, OnInit} from '@angular/core';
import {DatePipe, DecimalPipe, JsonPipe} from "@angular/common";
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bill-details',
  imports: [
    DatePipe,
    JsonPipe,
    DecimalPipe
  ],
  templateUrl: './bill-details.html',
  styleUrl: './bill-details.css',
})
export class BillDetails  implements  OnInit{
  billDetails : any;
  billId!:number;
  constructor( private http : HttpClient,private router : Router,private route:ActivatedRoute) {
    this.billId=route.snapshot.params['billId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8085/billing-service/api/bills/"+this.billId).subscribe(
      {
        next : (data )=> {this.billDetails=data},
        error : (err) => {console.log(err)}
      })
  }

  getBillDetails() {

  }
  goBack(): void {

    this.router.navigate(['/bills']);

  }
}
