import fs from 'fs';

export function appendToCsv(data, filename) {
  try {
    const csvLine = Object.values(data).join(',') + '\n';
    fs.appendFileSync(filename, csvLine, 'utf-8');
    return true;
  } catch (error) {
    console.error('Error appending to CSV:', error);
    return false;
  }
}
