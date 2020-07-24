import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  product: Product ;

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl('')
  });

   @Input() title: string ;
   @Input() labelSubmit: string;
   @Input() set model(m: Product) {
     if (!m){
       return;
     }
     console.log('set model', m);
     this.form.patchValue(m);
   }

   @Output() submit: EventEmitter<Product> = new EventEmitter<Product>() ;
   @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.value){
      this.submit.emit(this.product); // Enviamos el modelo de datos: Product
    } else {
      console.error('Formulario es invalido')
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
