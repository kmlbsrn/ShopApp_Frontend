import { Category } from '../Category/Category';

export class Product {
  constructor(private c: Category) {
    this.category = c;
  }
  id!: number;
  name!: string;
  unitInStock!: number;
  unitPrice!: number;
  category: Category;
}
