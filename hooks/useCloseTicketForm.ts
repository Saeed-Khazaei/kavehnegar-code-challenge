import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import ticketsServices from "../services/ticketsServices";
import { useCloseTicketData } from "./useCloseTicketData";

export const useCloseTicketForm = () => {
  const router = useRouter()
  const id = router.query.id as string

  const onCloseTicket = () => {
    return { id }
  };
  const onSuccess = (e: AxiosResponse<{ id: string }>) => {
    router.push(`/tickets`)
  };

  const { mutate, isLoading } = useCloseTicketData(onSuccess);

  const { data, refetch } = useQuery(
    "ticket",
    () => ticketsServices.getTicket(id), {
    enabled: false
  }
  );

  useEffect(() => {
    if (id && id.length !== 0) {
      refetch()
    }
  }, [id])

  return {
    onCloseTicket,
    isLoading,
    data
  }
}