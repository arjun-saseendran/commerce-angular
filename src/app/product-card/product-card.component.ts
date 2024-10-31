import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  products: Product[] = [];

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data: Product[]) => {
        this.products = data;
      });
  }
}
