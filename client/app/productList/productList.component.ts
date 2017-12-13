import { AuthenticationService } from './../_services/authentication.service';
import { CartService } from './../_services/cart.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CustomHttp } from '../_helpers/index';
import { Http } from '@angular/http';
import { ProductService } from '../_services/index';

@Component({
  selector: 'product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  moduleId: module.id
})
export class ProductListComponent {

  constructor(
    private http: Http,
    public cartService: CartService,
    public productService: ProductService,
    public authenticationService: AuthenticationService
  ) { }

  nextPage() {
    this.productService.nextPage();
  }

  previousPage() {
    this.productService.previousPage();
  }

  addToCart(id: string) {
    this.cartService.addToCart(id);
  }

  removeFromCart(id: string) {
    this.cartService.removeFromCart(id);
  }

}