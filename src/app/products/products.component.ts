import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: string[] = [];
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('http://localhost:62799/api/Values').subscribe((res: string[]) => {
      this.products = res;
    })
  }

}
