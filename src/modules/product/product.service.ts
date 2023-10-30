import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
   @InjectModel('Product')
   private readonly productModel: Model<Product>,
  ) {}
  
  async createProduct(name: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      name,
      description: desc,
      price,
    });
    const result = await newProduct.save();
    return result;
  }
}