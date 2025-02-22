import { promises as fs } from 'fs';
import path from 'path';

export async function generateGnomeName() {
  try {
    // Fetch the gnome names from the local JSON file
    const data
    = await fs.readFile(path.resolve('./data/gnomeNames.json'), 'utf-8');
    //Parse the JSON data
    const gnomeNames = JSON.parse(data);
    //Access the GnomeNames array
    const dataNames = gnomeNames.gnomeNames;
    //Select a random gnome name from the array
    const randomIndex = Math.floor(Math.random() * dataNames.length);
    const gnomeName = dataNames[randomIndex];
    // Return the gnome name
    return gnomeName;
  } catch (error) {
    throw error;
  }
}