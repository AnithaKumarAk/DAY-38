import express from 'express';
import cors from 'cors';
import roomRouter from './routers/roomRouter.js';
import bookingRouter from './routers/bookingRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/rooms', roomRouter);
app.use('/bookings', bookingRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.status(200).send("API is running successfully");
});

app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});