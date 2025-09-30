import { json, error } from '@sveltejs/kit';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

export const POST = async ({ request }) => {
  const form = await request.formData();
  const file = form.get('font');
  if (!file || typeof file === 'string') throw error(400, 'No se recibió el archivo "font".');

  const allowed = new Set(['.ttf', '.otf', '.woff', '.woff2']);
  const ext = path.extname(file.name || '').toLowerCase();
  if (!allowed.has(ext)) throw error(415, 'Tipo de fuente no soportado.');

  const bytes = new Uint8Array(await file.arrayBuffer());
  const safeBase = (file.name || `fuente${ext}`).replace(/[^a-z0-9._-]+/gi, '_');
  const fileName = `${Date.now()}-${safeBase}`;

  // Guardaremos en static/fonts para que sea servible como /fonts/archivo
  const dir = path.join(process.cwd(), 'static', 'fonts');
  await mkdir(dir, { recursive: true });
  const fullPath = path.join(dir, fileName);
  await writeFile(fullPath, bytes);

  const url = `/fonts/${fileName}`;
  const name = safeBase.replace(/\.[^.]+$/, '');
  return json({ url, name });
};
