import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";

const CreateTicket = () => {
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
    console.log("formData", formData);
  };

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
            formData.message.trim().length == 0
          }
        />
      </form>
    </Wrapper>
  );
};

export default CreateTicket;
