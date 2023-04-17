import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxIconModule, IgxListModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgcFormsModule, IgxBadgeModule, IgxAvatarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCardModule,
    IgxIconModule,
    FormsModule,
    IgxListModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxButtonGroupModule,
    IgcFormsModule,
    IgxBadgeModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
