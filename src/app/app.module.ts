import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { ProductAdminListComponent } from './pages/admin/product-admin-list/product-admin-list.component';
import { ProductAdminUpdateComponent } from './pages/admin/product-admin-update/product-admin-update.component';
import { ProductAdminCreateComponent } from './pages/admin/product-admin-create/product-admin-create.component';
import { ProductAdminDetailComponent } from './pages/admin/product-admin-detail/product-admin-detail.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginAdminListComponent } from './pages/admin/login-admin-list/login-admin-list.component';
import { LoginAdminCreateComponent } from './pages/admin/login-admin-create/login-admin-create.component';
import { LoginAdminUpdateComponent } from './pages/admin/login-admin-update/login-admin-update.component';
import { LoginAdminDetailComponent } from './pages/admin/login-admin-detail/login-admin-detail.component';
import { RegisterAdminListComponent } from './pages/admin/register-admin-list/register-admin-list.component';
import { RegisterAdminUpdateComponent } from './pages/admin/register-admin-update/register-admin-update.component';
import { RegisterAdminCreateComponent } from './pages/admin/register-admin-create/register-admin-create.component';
import { RegisterAdminDetailComponent } from './pages/admin/register-admin-detail/register-admin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    BannerComponent,
    ProductListComponent,
    LienheComponent,
    ProductAdminListComponent,
    ProductAdminUpdateComponent,
    ProductAdminCreateComponent,
    ProductAdminDetailComponent,
    SidebarAdminComponent,
    LayoutComponent,
    LayoutAdminComponent,
    DashboardComponent,
    LoginAdminListComponent,
    LoginAdminCreateComponent,
    LoginAdminUpdateComponent,
    LoginAdminDetailComponent,
    RegisterAdminListComponent,
    RegisterAdminUpdateComponent,
    RegisterAdminCreateComponent,
    RegisterAdminDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
