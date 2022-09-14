import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCreateTicketData } from "./useTicketsData";

export const useCreateTicketForm = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: "",
    message: "",
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTicket(formData);
  };

  const onSuccess = (e: AxiosResponse<{ id: string }>) => {
    router.push(`/tickets`)
  };

  const { mutate: createTicket, isLoading } = useCreateTicketData(onSuccess);
  return {
    formData,
    onChangeTitle,
    onChangeMessage,
    onSubmit,
    isLoading
  }
}