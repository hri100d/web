import mongoose, { Schema, model} from "mongoose";


export const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

export const Note = model('Note', NoteSchema)