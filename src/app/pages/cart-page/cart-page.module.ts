import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartPageComponent } from './cart-page.component';

@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CartPageComponent },
    ])
  ],
  exports: [RouterModule]
})
export class CartPageModule {}
