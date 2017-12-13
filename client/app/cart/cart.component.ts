import { CartService } from './../_services/cart.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CustomHttp } from '../_helpers/index';
import { Http } from '@angular/http';

@Component({
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    moduleId: module.id
})
export class CartComponent {

    model: any = {};

    constructor(
        private http: Http,
        public cartService: CartService
    ) { }

    addToCart(id: string) {
        this.cartService.addToCart(id);
    }
    
    removeFromCart(id: string) {
        this.cartService.removeFromCart(id);
    }

    confirm() {
        this.cartService.confirm(this.model.address);
    }

}
