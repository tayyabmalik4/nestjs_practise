import { Category } from "../Schemas/book.schema";


export class CreateBookDto {
    readonly title : string;
    readonly desc : string;
    readonly author : string;
    readonly price : number;
    readonly category : Category
}