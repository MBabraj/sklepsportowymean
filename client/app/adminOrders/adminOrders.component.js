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
var router_1 = require("@angular/router");
var authentication_service_1 = require("./../_services/authentication.service");
var cart_service_1 = require("./../_services/cart.service");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent(http, cartService, authenticationService, router) {
        this.http = http;
        this.cartService = cartService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.getAllOrders();
        if (!this.authenticationService.isAdmin()) {
            this.router.navigate(['/']);
        }
    }
    AdminOrdersComponent.prototype.setProcessed = function (order, processed) {
        this.http.post('/orders/process/' + order._id, { processed: processed }).subscribe(function (a) {
            order.processed = a.json().processed;
        });
    };
    AdminOrdersComponent.prototype.getAllOrders = function () {
        var _this = this;
        this.http.get('/orders').subscribe(function (a) {
            _this.orders = a.json();
        });
    };
    AdminOrdersComponent = __decorate([
        core_1.Component({
            templateUrl: './adminOrders.component.html',
            styleUrls: ['./adminOrders.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [http_1.Http,
            cart_service_1.CartService,
            authentication_service_1.AuthenticationService,
            router_1.Router])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());
exports.AdminOrdersComponent = AdminOrdersComponent;
//# sourceMappingURL=adminOrders.component.js.map