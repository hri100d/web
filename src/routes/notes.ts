import { Router, Request, Response } from 'express';
import { notesController } from '../controllers/notes-controller';
import INote from '../interfaces/note';

const router = Router();


router.get('/', async (request: Request, response: Response) => {
  const { limit, offset } = request.query;

  const notes = await notesController.getNotesData(Number(limit), Number(offset));
  response.status(200).json(notes);
});


router.get('/:id', async (request: Request, response: Response) => {

  const { id } = request.params;

  const note = await notesController.getNoteById(id);

  if (note === null) {
      response.status(404).json({ message: 'Note not found' });
      return;
  }

  response.json(note);
});

router.put('/:id', async (request: Request, response: Response) => {
  const data: Partial<INote> = request.body;
  const { id } = request.params;

  const note = await notesController.updateNoteById(id, data);

  if (!note) {
      response.status(404).json({ message: 'Note not found' });
      return;
  }

  response.status(200).json({ message: 'Note updated successfully' });
});

router.post('/', async (request: Request, response: Response) => {
  const noteData: INote = request.body;

  const note = await notesController.createNote(noteData);

  if (note) {
      response.status(201).json('Note created');
  } else {
      response.status(400).json("Note wasn't created successfully")
  }
});

router.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const deletedNote = await notesController.deleteNoteById(id);

  if (!deletedNote) {
      response.status(404).json('Note not found')
  } else {
      response.status(200).json('Note deleted')
  }
})


export { router };