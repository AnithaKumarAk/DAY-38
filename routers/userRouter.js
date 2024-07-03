import express from 'express';
import { listBookings, listCustomerCount } from '../controller/user.js';

const router = express.Router();

router.get('/list', listBookings);
router.get('/count/:customerId', listCustomerCount);

export default router;