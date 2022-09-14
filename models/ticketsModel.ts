export interface TicketsStatus {
  status: "pending" | "answered" | "closed"
}

export interface TicketsResponse extends TicketsStatus {
  id: number;
  received: Date;
  title: string;
  message: string;
  user: string;
  support: string;
  supportMessage: string;
}

export interface TicketsSendData {
  title: string;
  message: string;
}
