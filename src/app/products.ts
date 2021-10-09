export const products = [
  {
    id: 1,
    name: 'iPhone Pro',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'iPhone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'iPhone',
    price: 299,
    description: '',
  },
];

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  // [key: string]: any;
};
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
