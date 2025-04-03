import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  getMoviesController,
  getMoviesByIdController,
} from '../controllers/movies.js';

const moviesRouter = Router();

moviesRouter.get('/', ctrlWrapper(getMoviesController));

moviesRouter.get('/:id', ctrlWrapper(getMoviesByIdController));

export default moviesRouter;
