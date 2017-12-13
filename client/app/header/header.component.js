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
var core_1 = require("@angular/core");
var cart_service_1 = require("../_services/cart.service");
var index_1 = require("../_services/index");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cartService, productService, authenticationService, zone) {
        this.cartService = cartService;
        this.productService = productService;
        this.authenticationService = authenticationService;
        this.zone = zone;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.doSearch = function (value) {
        this.productService.setFilterBy(value);
    };
    HeaderComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.zone.runOutsideAngular(function () {
            location.reload();
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [cart_service_1.CartService, index_1.ProductService, authentication_service_1.AuthenticationService, core_1.NgZone])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map