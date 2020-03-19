import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './catalog-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookPageComponent } from '../book-page/book-page.component';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';

@NgModule({
  declarations: [
    CatalogPageComponent,
    BookPageComponent,
    CounterComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CatalogPageComponent },
      { path: ':id', component: BookPageComponent },
    ])
  ],
  exports: [RouterModule]
})
export class CatalogPageModule {}
