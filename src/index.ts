import express from 'express';
import { router as notesRouter } from './routes/notes';
import { connectDB } from './utils/db-utils';

const app = express();

app.use(express.json({ type: 'application/json' }));

app.use('/notes', notesRouter);

connectDB().then(() => {
    console.log('DB is listening on port 27017');
    app.listen(3000);
    console.log('Server is listening on port 3000');
}).catch(error => console.error(error));
