"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./_guards/index");
var cart_component_1 = require("./cart/cart.component");
var orders_component_1 = require("./orders/orders.component");
var adminOrders_component_1 = require("./adminOrders/adminOrders.component");
var appRoutes = [
    { path: '', component: index_1.HomeComponent },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'cart', component: cart_component_1.CartComponent, canActivate: [index_4.AuthGuard] },
    { path: 'orders', component: orders_component_1.OrdersComponent, canActivate: [index_4.AuthGuard] },
    { path: 'adminOrders', component: adminOrders_component_1.AdminOrdersComponent, canActivate: [index_4.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map