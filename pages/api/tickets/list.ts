import type { NextApiRequest, NextApiResponse } from "next";
import { getDbDatas } from "../../../helper/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getDbDatas()
  return res.status(200).json(data);
}
