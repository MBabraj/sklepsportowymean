"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var index_1 = require("./index");
var CartService = /** @class */ (function () {
    function CartService(authenticationService, http) {
        this.authenticationService = authenticationService;
        this.http = http;
        this.cart = {};
        this.getCart();
    }
    CartService.prototype.getCart = function () {
        var _this = this;
        if (this.authenticationService.isLogged()) {
            this.http.get('/cart').subscribe(function (a) {
                _this.updateCart(a.json());
            });
        }
    };
    CartService.prototype.updateCart = function (cart) {
        this.cart = cart;
        this.numberOfElements = cart.products.length;
        this.sumOfMoney = this.numberOfElements ? cart.products.map(function (cartProduct) {
            return cartProduct.amount * cartProduct.product.price;
        }).reduce(function (a, b) { return (a || 0) + b; }) : 0;
    };
    CartService.prototype.productInCart = function (id) {
        if (!this.cart || !this.cart.products || !this.cart.products.length)
            return false;
        var prod = this.cart.products.find(function (a) { return a.product._id == id; });
        if (!prod)
            return false;
        return prod.amount;
    };
    CartService.prototype.addToCart = function (id) {
        var _this = this;
        this.http.put('/cart/product/' + id, {}).subscribe(function (a) {
            _this.updateCart(a.json());
        });
    };
    CartService.prototype.removeFromCart = function (id) {
        var _this = this;
        this.http.delete('/cart/product/' + id, {}).subscribe(function (a) {
            _this.updateCart(a.json());
        });
    };
    CartService.prototype.confirm = function (postAddress) {
        var _this = this;
        this.http.post('/cart/confirm', { postAddress: postAddress }).subscribe(function (a) {
            _this.getCart();
        });
    };
    CartService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.AuthenticationService, http_1.Http])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map