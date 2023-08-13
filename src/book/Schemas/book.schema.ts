import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {
    ADVANTURE = 'advanture',
    CLASSICS = 'Classics',
    CRIME = 'crime',
    FANTASY = 'fantasy',

}

@Schema({
    timestamps : true,
})


export class Book{
    @Prop()
    title : string;

    @Prop()
    desc : string;

    @Prop()
    author : string;

    @Prop()
    price : number;

    @Prop()
    category : Category

}

export const BookSchema = SchemaFactory.createForClass(Book)