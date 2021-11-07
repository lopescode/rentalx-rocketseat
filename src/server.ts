import express, { json } from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log('Server started on port 3333'));
