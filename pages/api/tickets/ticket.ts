import type { NextApiRequest, NextApiResponse } from "next";
import { TicketsResponse } from "../../../models/ticketsModel";
import { getDbDatas, saveDbDatas } from "../../../helper/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;

  if (!id) res.status(404).end();

  if (req.method == "GET") {
    const oldData = await getDbDatas() as TicketsResponse[];
    const data = oldData.find(i => i.id == +id)
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).end();
    }
  }
  if (req.method == "DELETE") {
    const oldData = await getDbDatas() as TicketsResponse[];
    let data = oldData.find(i => i.id == +id)

    if (data) {
      data = { ...data, status: "closed" }
      saveDbDatas([...oldData.filter(i => i.id !== data?.id), data].sort((a, b) => b.id - a.id))
      res.status(201).end();
    } else {
      res.status(400).end();
    }
  }
}
