import { SearchComponent } from './search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register/register.component';

import { LoginComponent } from './register/login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CompareComponent } from './compare/compare.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileMainComponent } from './maintenance-action/profile/profile.component';
import { ProfileComponent } from './vendor-action/profile/profile.component';
import { VendorActionComponent } from './vendor-action/vendor-action.component';
import { MaintenanceActionComponent } from './maintenance-action/maintenance-action.component';
import { AddcarComponent } from './vendor-action/addcar/addcar.component';
import { ListcarComponent } from './vendor-action/listcar/listcar.component';
import { StatisticsComponent } from './vendor-action/statistics/statistics.component';
import { FeedbackComponent } from './vendor-action/feedback/feedback.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AddpartComponent } from './maintenance-action/addpart/addpart.component';
import { ListpartComponent } from './maintenance-action/listpart/listpart.component';
import { CarsComponent } from './cars/cars.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { PartsDetailsComponent } from './parts-details/parts-details.component';
import { PartlistComponent } from './maintainance/partlist/partlist.component';
import { ListCarComponent } from './vendors/list-car/list-car.component';
import { PartComponent } from './maintainance/part/part.component';
import { PartsComponent } from './parts/parts.component';
import { MaintainanceComponent } from './maintainance/maintainance.component';
import { AddCarComponent } from './vendors/add-car/add-car.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


import { ShowStatisticsComponent } from './admin/show-statistics/show-statistics.component';

import { ShowfeedbackComponent } from './admin/show-feedback/show-orders.component';
import { ViewallmintainanceComponent } from './admin/viewallmintainance/viewallmintainance.component';
import { ViewallvendorComponent } from './admin/viewallvendor/viewallvendor.component';
import { ViewvendorwaitinglistComponent } from './admin/viewvendorwaitinglist/viewvendorwaitinglist.component';
import { ViewmentainacewaitinglistComponent } from './admin/viewmentainacewaitinglist/viewmentainacewaitinglist.component';
import { ViewvendorblocklistComponent } from './admin/viewvendorblocklist/viewvendorblocklist.component';
import { ViewmintainaceblocklistComponent } from './admin/viewmintainaceblocklist/viewmintainaceblocklist.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { InterceptorService } from './register/interceptor.service';
import { OrdersComponent } from './vendor-action/orders/orders.component';
import { AdminregisterComponent } from './admin/adminlogin/adminregister/adminregister.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ContactusComponent,
    CompareComponent,
    NotfoundComponent,
    ProfileMainComponent,
    ProfileComponent,
    VendorActionComponent,
    MaintenanceActionComponent,
    AddcarComponent,
    ListcarComponent,
    AddpartComponent,
    ListpartComponent,
    StatisticsComponent,
    FeedbackComponent,
    AdminComponent,
    UserComponent,
    UserProfileComponent,
    CarsComponent,
    CarsDetailsComponent,
    PartsDetailsComponent,
    PartlistComponent,
    ListCarComponent,
    PartComponent,
    AddCarComponent,
    PartsComponent,
    MaintainanceComponent,
    DashboardComponent,
    ShowStatisticsComponent,
    ShowfeedbackComponent,
    ViewallmintainanceComponent,
    ViewallvendorComponent,
    ViewvendorwaitinglistComponent,
    ViewmentainacewaitinglistComponent,
    ViewvendorblocklistComponent,
    ViewmintainaceblocklistComponent,
    AdminloginComponent,
    OrdersComponent,
    AdminregisterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
