import express, { response } from 'express';

const nutemployeeRouter = express.Router();

nutemployeeRouter.get('/', (request, response) => response.json({ message: 'test' }));

export default nutemployeeRouter;