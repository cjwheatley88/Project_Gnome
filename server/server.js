import express from 'express';
import cors from 'cors';
import { generateContent } from './gemini.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await generateContent(prompt); // Call the function to get the result
    res.json({ response }); // Send the generated content as a response
  } catch (error) {
    res.status(500).json({ error: 'Error generating content' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});