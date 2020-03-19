import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'signin', component: SignInPageComponent },
  { path: 'books', canActivate: [AuthGuard],
                  loadChildren: () => import('./pages/catalog-page/catalog-page.module').then(l => l.CatalogPageModule) },
  { path: 'cart', canActivate: [AuthGuard],
                  loadChildren: () => import('./pages/cart-page/cart-page.module').then(l => l.CartPageModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
