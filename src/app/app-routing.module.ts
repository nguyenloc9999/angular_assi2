import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailproductComponent } from './pages/detailproduct/detailproduct.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { ProductAdminListComponent } from './pages/admin/product-admin-list/product-admin-list.component';
import { ProductAdminCreateComponent } from './pages/admin/product-admin-create/product-admin-create.component';
import { ProductAdminUpdateComponent } from './pages/admin/product-admin-update/product-admin-update.component';
import { ProductAdminDetailComponent } from './pages/admin/product-admin-detail/product-admin-detail.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
// import { LoginAdminListComponent } from './pages/admin/login-admin-list/login-admin-list.component';
// import { LoginAdminCreateComponent } from './pages/admin/login-admin-create/login-admin-create.component';
// import { LoginAdminUpdateComponent } from './pages/admin/login-admin-update/login-admin-update.component';
// import { LoginAdminDetailComponent } from './pages/admin/login-admin-detail/login-admin-detail.component';
import { RegisterAdminListComponent } from './pages/admin/register-admin-list/register-admin-list.component';
import { RegisterAdminCreateComponent } from './pages/admin/register-admin-create/register-admin-create.component';
import { RegisterAdminUpdateComponent } from './pages/admin/register-admin-update/register-admin-update.component';
import { RegisterAdminDetailComponent } from './pages/admin/register-admin-detail/register-admin-detail.component';
const routes: Routes = [
  // Ứng dụng phía máy chủ: (admin)
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ProductAdminListComponent },
      { path: 'product-list', component: ProductAdminListComponent },
      { path: 'product-create', component: ProductAdminCreateComponent },
      { path: 'products-update/:id', component: ProductAdminUpdateComponent },
      { path: 'product-detail/:id', component: ProductAdminDetailComponent },
      // { path: 'login-list', component: LoginAdminListComponent },
      // { path: 'login-create', component: LoginAdminCreateComponent },
      // { path: 'login-update/:id', component: LoginAdminUpdateComponent },
      // { path: 'login-detail/:id', component: LoginAdminDetailComponent },
      { path: 'register-list', component: RegisterAdminListComponent },
      { path: 'register-create', component: RegisterAdminCreateComponent },
      { path: 'register-update/:id', component: RegisterAdminUpdateComponent },
      { path: 'register-detail/:id', component: RegisterAdminDetailComponent }
    ],

  },


  // // ứng dụng phía khách:
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: HomeComponent },
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //     },
  //     { path: 'register', component: RegisterComponent },
  //   ],
  // },

  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: DetailproductComponent },
  { path: 'lienhe', component: LienheComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
