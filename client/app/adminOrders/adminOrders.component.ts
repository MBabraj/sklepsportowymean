import { Router } from '@angular/router';
import { AuthenticationService } from './../_services/authentication.service';
import { CartService } from './../_services/cart.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CustomHttp } from '../_helpers/index';
import { Http } from '@angular/http';

@Component({
    templateUrl: './adminOrders.component.html',
    styleUrls: ['./adminOrders.component.css'],
    moduleId: module.id
})
export class AdminOrdersComponent {

    orders: any;

    constructor(
        private http: Http,
        public cartService: CartService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.getAllOrders();
        if (!this.authenticationService.isAdmin()) {
            this.router.navigate(['/']);
        }
    }

    setProcessed(order: any, processed: boolean) {
        this.http.post('/orders/process/' + order._id, {processed}).subscribe(a => {
            order.processed = a.json().processed;
        });
    }

    getAllOrders() {
        this.http.get('/orders').subscribe(a => {
            this.orders = a.json();
        });
    }

}
