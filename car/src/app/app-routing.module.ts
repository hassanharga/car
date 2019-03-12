import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarComponent } from './vendors/list-car/list-car.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { PartsComponent } from './parts/parts.component';
import { MaintainanceComponent } from './maintainance/maintainance.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CompareComponent } from './compare/compare.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './register/login/login.component';
import { AddCarComponent } from './vendors/add-car/add-car.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PartComponent } from './maintainance/part/part.component';
import { PartlistComponent } from './maintainance/partlist/partlist.component';
import { ProfileComponent } from './vendor-action/profile/profile.component';
import { VendorActionComponent } from './vendor-action/vendor-action.component';
import { MaintenanceActionComponent } from './maintenance-action/maintenance-action.component';
import { AddcarComponent } from './vendor-action/addcar/addcar.component';
import { ListcarComponent } from './vendor-action/listcar/listcar.component';
import { StatisticsComponent } from './vendor-action/statistics/statistics.component';
import { FeedbackComponent } from './vendor-action/feedback/feedback.component';
import { AddpartComponent } from './maintenance-action/addpart/addpart.component';
import { ListpartComponent } from './maintenance-action/listpart/listpart.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PartsDetailsComponent } from './parts-details/parts-details.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { GuardregGuard } from './register/guardreg.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ShowStatisticsComponent } from './admin/show-statistics/show-statistics.component';
import {  ShowfeedbackComponent } from './admin/show-feedback/show-orders.component';
import { ViewvendorwaitinglistComponent } from './admin/viewvendorwaitinglist/viewvendorwaitinglist.component';
import { ViewvendorblocklistComponent } from './admin/viewvendorblocklist/viewvendorblocklist.component';
import { ViewmentainacewaitinglistComponent } from './admin/viewmentainacewaitinglist/viewmentainacewaitinglist.component';
import { ViewmintainaceblocklistComponent } from './admin/viewmintainaceblocklist/viewmintainaceblocklist.component';
import { ViewallvendorComponent } from './admin/viewallvendor/viewallvendor.component';
import { ViewallmintainanceComponent } from './admin/viewallmintainance/viewallmintainance.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { OrdersComponent } from './vendor-action/orders/orders.component';
import { UserGuard } from './register/user.guard';
import { MaintenanceGuard } from './register/maintenance.guard';
import { VendorGuard } from './register/vendor.guard';
import { SearchComponent } from './search/search.component';

import { AdminregisterComponent } from './admin/adminlogin/adminregister/adminregister.component';
import { AdminGuard } from './register/admin.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'cars',component:CarsComponent},
  { path: 'search', component: SearchComponent },
  {path:'parts',component:PartsComponent},
  {path:'maintainance',component:MaintainanceComponent},
  {path:'contactus',component:ContactusComponent,canActivate:[GuardregGuard]},
  {path:'compare',component:CompareComponent},
  {path:'register',component:RegisterComponent},
  {
    path: 'vendor-action', component: VendorActionComponent, canActivate: [GuardregGuard, VendorGuard],
  children: [
    {path:'users/detailsvendor/:id',component:ProfileComponent},
    { path: 'addcar', component: AddcarComponent},
    { path: 'listcar', component: ListcarComponent},
    {path:'statistics',component:StatisticsComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'orders',component:OrdersComponent},
    {path:"",redirectTo:"users/detailsvendor/:id",pathMatch:"full"},
  ]
},
  {
    path: 'maintenance-action', component: MaintenanceActionComponent, canActivate: [GuardregGuard, MaintenanceGuard],
  children: [
    {path:'users/detailsmaintenance/:id',component:ProfileComponent},
    {path:'addpart',component:AddpartComponent,canActivate:[GuardregGuard]},
    {path:'listpart',component:ListpartComponent,canActivate:[GuardregGuard]},
    {path:"",redirectTo:"profile",pathMatch:"full"},
  ]
},
{path:'user-action',component:UserComponent,
  canActivate: [GuardregGuard, UserGuard],
  children: [
    {path:'users/detailsuser/:id',component:UserProfileComponent},
  ]
},
  { path: "adminlogin", component: AdminloginComponent },
{ path: "adminregister", component:AdminregisterComponent },
{
  path: "admin",
  component: AdminComponent,
  canActivate:[GuardregGuard,AdminGuard],
  children: [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component:DashboardComponent },
    { path: "showstatistics", component: ShowStatisticsComponent },
    { path: "showvendors", component: ViewallvendorComponent },
    { path: "showmaintenance", component: ViewallmintainanceComponent },
    { path: "showfeedback", component: ShowfeedbackComponent },
    { path: "vendorwatinglist", component: ViewvendorwaitinglistComponent },
    { path: "vendorblocklist", component: ViewvendorblocklistComponent },
    { path: "maintenancewatinglist", component: ViewmentainacewaitinglistComponent },
    { path: "maintenanceblocklist", component: ViewmintainaceblocklistComponent },
  ]
},
  {path:'cars',component:CarsComponent},
  {path:'cars/cardetails/:id',component:CarsDetailsComponent},
  {path:'parts',component:PartsComponent},
  {path:'parts/partsdetails/:id',component:PartsDetailsComponent},
  // {path:'addPart',component:PartComponent},
  // {path:'list',component:ListCarComponent},
  // {path:'listPart',component:PartlistComponent},
  {path:'login',component:LoginComponent},
  {path:'addcar',component:AddCarComponent,canActivate:[GuardregGuard]},

  {path:'listcar',component:ListCarComponent,canActivate:[GuardregGuard]},
  {path:'addpart',component:PartComponent,canActivate:[GuardregGuard]},
  {path:'listpart',component:PartlistComponent,canActivate:[GuardregGuard]},
  {path: '',redirectTo:'home', pathMatch: 'full'},
  {path:'notfound',component:NotfoundComponent },
  {path: '**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
