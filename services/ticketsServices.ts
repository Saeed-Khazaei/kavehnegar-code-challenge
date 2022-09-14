import axios, { AxiosResponse } from "axios";
import { TicketsResponse, TicketsSendData } from "../models/ticketsModel";
import { getTicketsNextApi, postTicketNextApi } from "../utils/endpoints";


export default {
  async createTicket({ title, message }: TicketsSendData) {
    const data = {
      title,
      message,
    }
    return await axios.post<{ id: string }>(postTicketNextApi, data);
  },
  async getTicketsList() {
    return await axios.get<TicketsResponse[]>(getTicketsNextApi);
  },
}