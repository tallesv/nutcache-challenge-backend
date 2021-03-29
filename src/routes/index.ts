import express from 'express';

import nutemployeeRouter from './nutemployee.routes';

const routes = express.Router();

routes.use('/nutemployee', nutemployeeRouter);

export default routes;
