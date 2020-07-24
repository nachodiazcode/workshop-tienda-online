import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Product } from '../shared/models/product';
import { ProductsServices } from '../shared/services/products.service';
import { ConfirmDialogModel } from '../../shared/models/confirm-dialog-model';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[]; 

  constructor(private service: ProductsServices, 
             private dialog: MatDialog, 
             private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadProducts();
  }


  deleteProduct(product: Product) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data : <ConfirmDialogModel> {
        title: 'Delete Product',
        message: '¿Estás seguro de que desea borrar este producto?'
      }
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result){
          this.sendDeleteRequest(product);
        }
      });
  }

  private loadProducts(){
    this.service.getAll()
    .subscribe(data => {
      console.log('data', data);
      this.products = data;
    });
  }

  private sendDeleteRequest(product: Product){
    this.service.delete(product.id)
    .subscribe(response => {
      console.log('Producto ha sido borrado', response);
      this.loadProducts();
      this.snackBar.open('Producto ha sido borrado', 'Close', {
        duration: 3000
      });
    });
    
  }

}
