import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthenticationService } from './index';

@Injectable()
export class CartService {

    cart: any = {};
    sumOfMoney: undefined;
    numberOfElements: 0;

    constructor(private authenticationService: AuthenticationService, private http: Http) {
        this.getCart();
    }   

    getCart() {
        if (this.authenticationService.isLogged()) {
            this.http.get('/cart').subscribe((a: any) => {
                this.updateCart(a.json());
            });
        } 
    }

    private updateCart(cart: any) {
        this.cart = cart;
        this.numberOfElements = cart.products.length;
        this.sumOfMoney = this.numberOfElements ? cart.products.map((cartProduct: any) => {
            return cartProduct.amount * cartProduct.product.price;
        }).reduce((a: any, b: any) => (a || 0) + b) : 0;
    }
    
    productInCart(id: string) {
        if (!this.cart || !this.cart.products || !this.cart.products.length) return false;
        var prod = this.cart.products.find((a: any) => a.product._id == id);
        if (!prod) return false;
        return prod.amount;
    }

    addToCart(id: string) {
        this.http.put('/cart/product/' + id, {}).subscribe((a: any) => {
            this.updateCart(a.json());
        });
    }

    removeFromCart(id: string) {
        this.http.delete('/cart/product/' + id, {}).subscribe((a: any) => {
            this.updateCart(a.json());
        });
    }

    confirm(postAddress: string) {
        this.http.post('/cart/confirm', {postAddress}).subscribe((a: any) => {
            this.getCart();
        });
    }
}
