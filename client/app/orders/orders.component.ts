import { CartService } from './../_services/cart.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CustomHttp } from '../_helpers/index';
import { Http } from '@angular/http';

@Component({
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
    moduleId: module.id
})
export class OrdersComponent {

    orders: any;

    constructor(
        private http: Http,
        public cartService: CartService
    ) {
        this.getAllOrders();
    }

    getAllOrders() {
        this.http.get('/orders').subscribe(a => {
            this.orders = a.json();
        });
    }

}
