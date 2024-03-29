import { useMutation } from 'react-query'
import ticketsServices from '../services/ticketsServices'

export const useCreateTicketData = (onSuccess: any) => {
  return useMutation(ticketsServices.createTicket, { onSuccess })
}

