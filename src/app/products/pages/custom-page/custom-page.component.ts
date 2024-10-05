import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product.interfaces';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
})
export class CustomPageComponent {
  public isUpperCase: boolean = false;

  public products: IProduct[] = [
    { code: 'P001', name: 'Laptop', category: 'Electronics', quantity: 15 },
    { code: 'P002', name: 'Smartphone', category: 'Electronics', quantity: 30 },
    { code: 'P003', name: 'Tablet', category: 'Electronics', quantity: 25 },
    { code: 'P004', name: 'Headphones', category: 'Accessories', quantity: 40 },
    { code: 'P005', name: 'Keyboard', category: 'Accessories', quantity: 35 },
    { code: 'P006', name: 'Mouse', category: 'Accessories', quantity: 50 },
    { code: 'P007', name: 'Monitor', category: 'Electronics', quantity: 10 },
    { code: 'P008', name: 'Printer', category: 'Office Supplies', quantity: 5 },
    { code: 'P009', name: 'Desk Chair', category: 'Furniture', quantity: 20 },
    { code: 'P010', name: 'Webcam', category: 'Accessories', quantity: 18 },
  ];

  public toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }
}
