import { useQuery, useMutation, useQueryClient } from 'react-query'
import ticketsServices from '../services/ticketsServices'

export const useCloseTicketData = (onSuccess: any) => {
  return useMutation(ticketsServices.closeTicket, { onSuccess })
}

