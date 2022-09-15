import { useMutation } from 'react-query'
import ticketsServices from '../services/ticketsServices'

export const useCloseTicketData = () => {
  return useMutation(ticketsServices.closeTicket)
}

