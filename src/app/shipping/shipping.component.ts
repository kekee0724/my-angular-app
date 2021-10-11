/*
 * @Author: 可可同学
 * @Date: 2021-10-11 02:48:18
 * @LastEditTime: 2021-10-11 11:10:16
 * @LastEditors: 可可同学
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts: any = this.cartService.getShippingPrices();
  constructor(private cartService: CartService) {
    console.log(this.shippingCosts)
  }

  ngOnInit() { }
}
