import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './Login/main-login-page';
import { productComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    loginComponent,
    ProductDetailComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([ 
      {path:'welcome',component:loginComponent},
    {path:'product',component:productComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'',redirectTo:'welcome',pathMatch:'full'}
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
