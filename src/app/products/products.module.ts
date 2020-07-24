import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductFormComponent } from './shared/components/product-form/product-form.component';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductAddComponent, ProductEditComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  
    SharedModule
  ]
})
export class ProductsModule { }
