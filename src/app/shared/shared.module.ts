import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { Filter1Pipe } from '../filter1.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FilterPipe,
    Filter1Pipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavigationComponent,
    HeaderComponent,
    FilterPipe,
    Filter1Pipe,
  ]
})
export class SharedModule { }
