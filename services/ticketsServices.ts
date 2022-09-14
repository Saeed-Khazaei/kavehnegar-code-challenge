import axios from "axios";
import { TicketsSendData } from "../models/ticketsModel";
import { postTicketNextApi } from "../utils/endpoints";


export default {
  async createTicket({ title, message }: TicketsSendData) {
    const data = {
      title,
      message,
    }
    return await axios.post<{ id: string }>(postTicketNextApi, data);
  },
}