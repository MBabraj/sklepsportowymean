import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit, EventEmitter, Output, NgZone } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { Http } from '@angular/http';
import { ProductService } from '../_services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  moduleId: module.id
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService, public productService: ProductService, public authenticationService: AuthenticationService, private zone: NgZone) { }

  searchValue: string;
  currentUser: any;

  ngOnInit() {
  }

  doSearch(value: string) {
    this.productService.setFilterBy(value);
  }

  logout() {
    this.authenticationService.logout();
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  }

}