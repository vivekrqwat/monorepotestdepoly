import express from 'express';
import { connectDB } from '@repo/db';

const app = express();

connectDB().catch((err) => console.error('DB connect error:', err));
console.log('DB connection initiated');
app.get('/', (req, res) => res.send('OK'));

app.listen(3000, () => {
    console.log('server is running on port 3000');
});