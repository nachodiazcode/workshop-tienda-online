import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Product } from '../shared/models/product';
import { ProductsServices } from '../shared/services/products.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private service: ProductsServices, private router: Router, private snackBar: MatSnackBar  ) { }

  ngOnInit(): void {
  }

  submit(product: Product): void {
 
    console.log('Se ha guardado', product);
    this.service.add(product)
      .subscribe(result => {
        console.log('El producto ha sido agregado', result);
        this.snackBar.open('El producto ha sido agregado', 'close', {
          duration: 3000
        });
        this.router.navigate(['']);
      });
  }

  cancel() {
    this.router.navigate(['']);
  }

}
