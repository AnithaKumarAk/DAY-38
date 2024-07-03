import express from 'express';
import { createRoom, listRoomsWithBookings } from '../controller/room.js';

const router = express.Router();

router.post('/create', createRoom);
router.get('/list', listRoomsWithBookings);

export default router;