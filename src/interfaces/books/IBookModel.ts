// src/interfaces/books/IBookModel.ts

import { IBook } from './IBook';

export interface IBookModel {
  create(data: Partial<IBook>): Promise<IBook>,
}