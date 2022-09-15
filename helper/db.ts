import path from 'path';
import { promises as fs } from 'fs';
import { TicketsResponse } from '../models/ticketsModel';

const jsonDirectory = path.join(process.cwd(), 'helper');

export const getDbDatas = async () => {
  const oldData = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  return JSON.parse(oldData);
}

export const saveDbDatas = (data: TicketsResponse[]) => {
  fs.writeFile(jsonDirectory + '/data.json', JSON.stringify(data))
}