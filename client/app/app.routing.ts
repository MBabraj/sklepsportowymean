import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminOrdersComponent } from './adminOrders/adminOrders.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
    { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
    { path: 'adminOrders', component: AdminOrdersComponent, canActivate: [AuthGuard]  },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);