import INote from "../interfaces/note";
import { Note } from "../models/note";

class NotesController {
    constructor() { }

    public async getNotesData(limit: number, offset: number) {
        return await Note.find({}).skip(offset).limit(limit);
    }

    public async getNoteById(id: string) {
        return await Note.findById(id);
    }

    public async createNote(note: INote) {
        const newNote: INote = {
            ...note
        };

        return await Note.create(newNote);
    }

    public async updateNoteById(id: string, noteData: Partial<INote>) {
        const updatedNote = await Note.findByIdAndUpdate(id, noteData);

        return updatedNote;
    }

    public async deleteNoteById(id: string) {
        const deletedNote = await Note.findByIdAndDelete(id);

        return deletedNote;
    }
}

export const notesController = new NotesController();