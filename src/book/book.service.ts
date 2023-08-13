import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Book } from './Schemas/book.schema';
import mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) { }

    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find()
        return books
    }


    // Post Request
    async create(book: Book): Promise<Book> {
        const res = await this.bookModel.create(book)
        return res
    }

    async findById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id);

        if (!book) {
           throw new NotFoundException("Book is Not Found")
        }
        return book;
    }
    async updateById(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        })
    }
    async deleteById(id:string) : Promise<Book>{
        const book = await this.bookModel.findByIdAndDelete(id)

        if(!book){
            throw new NotFoundException("Book Not Found")
        }
        return book;
    }
}
