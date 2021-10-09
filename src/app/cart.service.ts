/*
 * @Author: 可可同学
 * @Date: 2021-10-09 16:51:28
 * @LastEditTime: 2021-10-09 17:22:19
 * @LastEditors: 可可同学
 * @Description:
 */
import { Injectable } from '@angular/core';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() {}
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
