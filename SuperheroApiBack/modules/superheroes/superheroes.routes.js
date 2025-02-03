import express from 'express';
import SuperheroesController from './superheroes.controller.js';


const router = express.Router();

router.get('/superheroes',  SuperheroesController.getSuperheroes);
router.post('/superheroes', SuperheroesController.addSuperheroes);

export default router;