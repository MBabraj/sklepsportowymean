"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_service_1 = require("./_services/product.service");
var cart_service_1 = require("./_services/cart.service");
var productList_component_1 = require("./productList/productList.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var index_1 = require("./_helpers/index");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_2 = require("./_directives/index");
var index_3 = require("./_guards/index");
var index_4 = require("./_services/index");
var index_5 = require("./home/index");
var index_6 = require("./login/index");
var index_7 = require("./register/index");
var header_component_1 = require("./header/header.component");
var cart_component_1 = require("./cart/cart.component");
var orders_component_1 = require("./orders/orders.component");
var adminOrders_component_1 = require("./adminOrders/adminOrders.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.AlertComponent,
                index_5.HomeComponent,
                index_6.LoginComponent,
                index_7.RegisterComponent,
                header_component_1.HeaderComponent,
                productList_component_1.ProductListComponent,
                cart_component_1.CartComponent,
                orders_component_1.OrdersComponent,
                adminOrders_component_1.AdminOrdersComponent,
            ],
            providers: [
                index_1.customHttpProvider,
                index_3.AuthGuard,
                index_4.AlertService,
                index_4.AuthenticationService,
                index_4.UserService,
                cart_service_1.CartService,
                product_service_1.ProductService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map