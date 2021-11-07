import express, { json } from 'express';

import { categoryRoutes } from './routes/category.routes';

const app = express();

app.use(json());

app.use('/categories', categoryRoutes);

app.listen(3333, () => console.log('Server started on port 3333'));
