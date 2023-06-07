import { Component } from '@angular/core';

import { Product } from 'src/app/common/product';
import products from 'src/app/data/product';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  products = products;
  p: number = 1
  product : Product[] | undefined
  search : any;
  onSubmit() {
    const p = products.filter(p=>  p.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(this.search.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())) 
    this.product = p
    // In ra giá trị của trường input
  }
}
