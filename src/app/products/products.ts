import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as http from 'node:http';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  products : any;
  constructor( private http : HttpClient) {
  }

  ngOnInit(): void {
     this.http.get("http://localhost:8085/inventory-service/products").subscribe(
       {
         next : (data )=> {this.products=data},
         error : (err) => {console.log(err)}
       })
    }

}
