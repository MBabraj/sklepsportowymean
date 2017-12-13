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
var authentication_service_1 = require("./../_services/authentication.service");
var cart_service_1 = require("./../_services/cart.service");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var index_1 = require("../_services/index");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(http, cartService, productService, authenticationService) {
        this.http = http;
        this.cartService = cartService;
        this.productService = productService;
        this.authenticationService = authenticationService;
    }
    ProductListComponent.prototype.nextPage = function () {
        this.productService.nextPage();
    };
    ProductListComponent.prototype.previousPage = function () {
        this.productService.previousPage();
    };
    ProductListComponent.prototype.addToCart = function (id) {
        this.cartService.addToCart(id);
    };
    ProductListComponent.prototype.removeFromCart = function (id) {
        this.cartService.removeFromCart(id);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: './productList.component.html',
            styleUrls: ['./productList.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [http_1.Http,
            cart_service_1.CartService,
            index_1.ProductService,
            authentication_service_1.AuthenticationService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=productList.component.js.map