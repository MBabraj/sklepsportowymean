import { ProductService } from './_services/product.service';
import { CartService } from './_services/cart.service';
import { ProductListComponent } from './productList/productList.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { customHttpProvider } from './_helpers/index';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminOrdersComponent } from './adminOrders/adminOrders.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        ProductListComponent,
        CartComponent,
        OrdersComponent,
        AdminOrdersComponent,
    ],
    providers: [
        customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CartService,
        ProductService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }