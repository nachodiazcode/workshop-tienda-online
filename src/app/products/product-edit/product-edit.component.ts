import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../shared/models/product';
import { ProductsServices } from '../shared/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: string ;
  product: Product ;

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar, private router: Router, private service: ProductsServices) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.get(this.id)
      .subscribe(product => {
        console.log('producto', product);
        this.product = product ;
      });
  }

  submit(): void{
      const product = this.product ;
      product.id = this.id ;
      console.log('Esto esta actualizando', product);
      this.service.update(this.product)
        .subscribe(result => console.log('Edición terminada', result));
      this.router.navigate(['/products']);
      this.snackBar.open('El producto ha sido actualizado! ', 'close ', {
          duration: 3000
      });
  }

  cancel(): void{
    this.router.navigate(['/products']) ;
  }
}
