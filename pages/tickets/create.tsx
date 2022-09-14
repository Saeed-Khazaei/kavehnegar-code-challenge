import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";
import { useCreateTicketForm } from "../../hooks/useCreateTicketForm";

const CreateTicket = () => {
  const { formData, onChangeMessage, onChangeTitle, onSubmit, isLoading } =
    useCreateTicketForm();

  return (
    <Wrapper title="ایجاد تیکت جدید">
      <form className="flex flex-col space-y-10" onSubmit={onSubmit}>
        <div>
          <Input
            label="عنوان تیکت"
            name="ticket_title"
            type="input"
            value={formData.title}
            onChange={onChangeTitle}
          />
        </div>
        <div>
          <Input
            label="متن تیکت"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={onChangeMessage}
          />
        </div>
        <Button
          title="ارسال تیکت"
          disabled={
            formData.title.trim().length == 0 ||
            formData.message.trim().length == 0 ||
            isLoading
          }
          loading={isLoading}
        />
      </form>
    </Wrapper>
  );
};

export default CreateTicket;
