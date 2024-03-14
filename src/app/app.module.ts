import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, HttpClientModule, CartModule, StoreModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
