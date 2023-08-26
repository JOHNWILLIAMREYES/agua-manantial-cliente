
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/users/users.service';
import { ProductService } from './services/products/product.service';
import { OrderService  } from './services/orders/orders.service';
import { InfoService } from './services/infoService/info.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { OrdersComponent } from './views/orders/orders.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { QuienesSomosComponent } from './views/quienes-somos/quienes-somos.component';
import { HomeComponent } from './views/home/home.component';
import { HistorialClienteComponent } from './views/historial-cliente/historial-cliente.component';
import { CarritoComponent } from './views/carrito/carrito.component';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginUserComponent } from './views/historial-cliente/modal/login-user/login-user.component';
import { MatSnackBarModule  } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    NavBarComponent,
    QuienesSomosComponent,
    HomeComponent,
    HistorialClienteComponent,
    CarritoComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule, 
    MatSnackBarModule,
    MatDialogModule,
    AppRoutingModule, 
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSidenavModule,
    ReactiveFormsModule,
  ],
  providers: [UserService,ProductService,InfoService, OrderService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
