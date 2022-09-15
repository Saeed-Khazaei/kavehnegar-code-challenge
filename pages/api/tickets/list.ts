import type { NextApiRequest, NextApiResponse } from "next";
import { getDbDatas } from "../../../helper/db";
import { TicketsResponse } from "../../../models/ticketsModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getDbDatas() as TicketsResponse[]
  return res.status(200).json(data.sort((a, b) => a.id - b.id));
}
