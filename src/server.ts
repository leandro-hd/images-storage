import * as dotenv from 'dotenv';

dotenv.config();

import express from 'express';

const app = express();

app.listen(3333, () => {
  console.log('Server is running...');
})