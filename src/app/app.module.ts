import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ColorBoxDirective } from './Directives/color-box.directive';
import { UsdtoEgpPipe } from './Pipe/usdto-egp.pipe';
import { IDtoBirthPipe } from './PipeID/idto-birth.pipe';
import { CreditPipePipe } from './PipeCredit/credit-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    ProductsComponent,
    ColorBoxDirective,
    UsdtoEgpPipe,
    IDtoBirthPipe,
    CreditPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
