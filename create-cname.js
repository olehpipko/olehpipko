import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем __dirname в ES-модуле
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domain = 'olehpipko.pp.ua';
const distPath = path.join(__dirname, 'dist', 'CNAME');

fs.writeFileSync(distPath, domain);
