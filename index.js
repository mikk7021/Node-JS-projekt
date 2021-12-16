import express from 'express';
import dotenv from 'dotenv';
import { router as SongRouter } from './Routes/song.router.js';
import { router as UserRouter } from './Routes/user.router.js';


// Kalder environment vars
dotenv.config();

const port = process.env.PORT || 3030;

const app = new express();
app.use(express.urlencoded({
	extended: true
  }));
app.use(express.json())

app.use(SongRouter);
app.use(UserRouter)

app.listen(port, () => {
	console.log(`Server kører på port http://localhost:${port}`);
})