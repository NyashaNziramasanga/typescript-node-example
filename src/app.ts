// es6 import
import express, { Application, Request, Response, NextFunction } from 'express';

const PORT = 5000;
// Type of Application
const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello to TypeScript Node 🔥');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
