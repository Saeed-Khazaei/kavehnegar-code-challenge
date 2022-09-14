import type { NextApiRequest, NextApiResponse } from "next";
import path from 'path';
import { promises as fs } from 'fs';
import { TicketsResponse } from "../../../models/ticketsModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonDirectory = path.join(process.cwd(), 'helper');
  const oldData = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  const oldDataJson = JSON.parse(oldData) as TicketsResponse[];
  const id = req.query.id as string;
  const data = oldDataJson.find(i => i.id == +id)
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400).end();
  }
}
