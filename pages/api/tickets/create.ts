import type { NextApiRequest, NextApiResponse } from "next";
import { TicketsResponse, TicketsSendData } from "../../../models/ticketsModel";
import { getDbDatas, saveDbDatas } from "../../../helper/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db: TicketsResponse[] = await getDbDatas()
  const body = req.body as TicketsSendData
  const newId = db.length + 1
  const data: TicketsResponse = {
    "id": newId,
    "received": new Date(),
    "status": "pending",
    "user": "سعید خزائی",
    "support": "",
    "supportMessage": '',
    ...body
  };
  saveDbDatas([...db, data])
  res.status(200).json({ id: newId });
}
